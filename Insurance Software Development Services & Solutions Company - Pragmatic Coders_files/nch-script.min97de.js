let lifetimeLocalStorage, lifetimeLocalStorageFirstVisit, 
    markAllAsReadMessage, showReadItemsMessage, hideReadItemsMessage, allReadMessage, 
    iconRead, pluginURL, showPClogo;

jQuery(document).ready(function($) {
    lifetimeLocalStorage = pcnch_data.localstorage_lifetime;
    lifetimeLocalStorageFirstVisit = pcnch_data.localstorage_first_visit_lifetime;

    /**
     * Stores messages in localStorage with an expiration time.
     *
     * @param {Array|string} messages - The messages to store.
     * @param {number} expirationDays - The number of days before the data expires.
     */
    function setMessagesInLocalStorage(messages, expirationDays) {
        const dataWithExpiration = {
            messages: messages,
            expiry: new Date().getTime() + expirationDays * 24 * 60 * 60 * 1000
        };
        localStorage.setItem('pcnch_strings', JSON.stringify(dataWithExpiration));
    }

    /**
     * Checks if localStorage messages are expired and resets them if necessary.
     *
     * @param {Array|string} defaultMessages - The default messages to store if the current ones are expired or missing.
     * @param {number} expirationDays - The number of days before the data expires.
     */
    function checkAndSetLocalStorageMessages(defaultMessages, expirationDays) {
        const storedData = JSON.parse(localStorage.getItem('pcnch_strings'));

        if (!storedData || storedData.expiry < new Date().getTime()) {
            setMessagesInLocalStorage(defaultMessages, expirationDays);
        }
    }

    const defaultMessages = {
        markAllAsReadMessage: atob(pcnch_data.message_mark_all_as_read),
        showReadItemsMessage: atob(pcnch_data.message_show_read_items),
        hideReadItemsMessage: atob(pcnch_data.message_hide_read_items),
        allReadMessage: atob(pcnch_data.message_all_read),
        iconRead: atob(pcnch_data.icon_read)
    };

    checkAndSetLocalStorageMessages(defaultMessages, 14);

    /**
     * Retrieves messages from localStorage.
     *
     * @return {Array|string} The stored messages, or `defaultMessages` if no data is found or expired.
     */
    function getMessagesFromLocalStorage() {
        const storedData = JSON.parse(localStorage.getItem('pcnch_strings'));
        return storedData ? storedData.messages : defaultMessages;
    }

    const messages = getMessagesFromLocalStorage();
    const markAllAsReadMessage = messages.markAllAsReadMessage;
    const showReadItemsMessage = messages.showReadItemsMessage;
    const hideReadItemsMessage = messages.hideReadItemsMessage;
    const allReadMessage = messages.allReadMessage;
    const iconRead = messages.iconRead;

    pluginURL = pcnch_data.plugin_url;
    showPClogo = pcnch_data.show_logo;

    var hiddenVisibility = getLocalStorage('pcnch_visibility_state') || 'hide';
    var $button = $('#show-hide');

    /**
     * Checks if the user agent is a bot.
     * @returns {boolean} True if the user agent matches bot patterns, otherwise false.
     */
    function isBot() {
        var userAgent = navigator.userAgent;
        return /bot|crawl|slurp|spider/i.test(userAgent);
    }

    if (hiddenVisibility === 'show') {
        $button.data('action', 'show').attr('data-action', 'show')
            .html(showReadItemsMessage);
        $('.notification-item.read').addClass('hidden');
    } else {
        $button.data('action', 'hide').attr('data-action', 'hide')
            .html(hideReadItemsMessage);
    }

    /**
     * Gets a localStorage value by name.
     * 
     * @param {string} name - The name of the localStorage item.
     * @returns {string|null} The value of the localStorage item, or null if not found.
     */
    function getLocalStorage(name) {
        var storedItem = localStorage.getItem(name);
        if (!storedItem) return null;

        var parsedItem = JSON.parse(storedItem);
        if (new Date().getTime() > parsedItem.expiry) {
            localStorage.removeItem(name);
            return null;
        }
        return parsedItem.value;
    }

    /**
     * Sets a localStorage item with a specified name, value, and expiration days.
     * 
     * @param {string} name - The name of the localStorage item.
     * @param {string} value - The value of the localStorage item.
     * @param {number} days - The number of days until the item expires.
     */
    function setLocalStorage(name, value, days) {
        var now = new Date();
        var expiry = now.getTime() + (days * 24 * 60 * 60 * 1000);
        localStorage.setItem(name, JSON.stringify({ value: value, expiry: expiry }));
    }

    /**
     * Deletes a localStorage item by name.
     * 
     * @param {string} name - The name of the localStorage item to delete.
     */
    function deleteLocalStorage(name) {
        localStorage.removeItem(name);
    }

    /**
     * Formats a date object into a string "YYYY-MM-DD".
     * 
     * @param {Date} date - The date object to format.
     * @returns {string} The formatted date string.
     */
    function formatDate(date) {
        return date.getFullYear() + '-' +
               ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
               ('0' + date.getDate()).slice(-2);
    }

    /**
     * Formats a date string into a localized string representation.
     * 
     * @param {string} dateStr - The date string to format.
     * @returns {string} The formatted date string.
     */
    function formatNotificationDate(dateStr) {
        var date = new Date(dateStr);
        var options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };
        return date.toLocaleDateString('en-US', options);
    }

    /**
     * Retrieves clicked notifications from localStorage.
     * 
     * @returns {Array<Object>} An array of clicked notification objects.
     */
    function getClickedNotifications() {
        const data = JSON.parse(localStorage.getItem('pcnch_read_notifications'));
        if (data && data.expiry > new Date().getTime()) {
            return data.items;
        }
        return [];
    }

    /**
     * Sets clicked notifications in localStorage.
     * 
     * @param {Array<Object>} clicked - An array of clicked notification objects.
     */
    function setClickedNotifications(clicked) {
        const expirationDays = 182;
        const dataWithExpiration = {
            expiry: new Date().getTime() + expirationDays * 24 * 60 * 60 * 1000,
            items: clicked,
        };
        localStorage.setItem('pcnch_read_notifications', JSON.stringify(dataWithExpiration));
    }

    /**
     * Fetches notification data from localStorage based on its ID.
     * 
     * @param {string} notificationId - The notification ID.
     * @returns {Object|null} The notification data if found, otherwise null.
     */
    function getNotificationById(notificationId) {
        var notifications = localStorage.getItem('pcnch_notifications');

        if (notifications) {
            try {
                var parsedNotifications = JSON.parse(notifications);
                var items = parsedNotifications.items;
                return items.find(item => item.id === notificationId) || null;
            } catch (e) {
                return null;
            }
        } else {
            return null;
        }
    }

    /**
     * Cleans up clicked notifications by removing IDs that are no longer valid.
     * 
     * @param {Array<Object>} items - The items to compare against clicked notifications.
     * @returns {Array<number>} The updated list of clicked notification IDs.
     */
    function cleanUpClickedNotifications(items) {
        var clickedNotifications = getClickedNotifications(); // Pobieramy listę przeczytanych powiadomień.
        
        var updatedClickedNotifications = clickedNotifications.filter(function(clickedId) {
            return items.some(function(item) {
                return item.id === clickedId;
            });
        });

        if (updatedClickedNotifications.length !== clickedNotifications.length) {
            setClickedNotifications(updatedClickedNotifications); // Zapisujemy zmodyfikowaną listę.
        }

        return updatedClickedNotifications;
    }

    /**
     * Displays notification items on the page.
     * 
     * @param {Array<Object>} items - The notification items to display.
     * @param {boolean} [isFirstVisit=false] - Indicates if this is the user's first visit.
     */
    function displayItems(items, isFirstVisit = false) {
        // Get visibility state from localStorage, default to 'hide'
        var hiddenVisibility = getLocalStorage('pcnch_visibility_state');

        // Retrieve the read notifications data from localStorage, or initialize with an empty object
        var readNotificationsData = JSON.parse(localStorage.getItem('pcnch_read_notifications')) || { items: [] };

        // Extract the list of read notification IDs
        var readNotifications = readNotificationsData.items.map(function(item) {
            return item.id; // Extract only the notification IDs
        });

        // Ensure that readNotifications is an array
        if (!Array.isArray(readNotifications)) {
            readNotifications = [];
        }

        var html = '<ul>';
        var unreadItems = [];
        var readItems = [];

        // Separate unread and read notifications
        items.forEach(function(item) {
            // If the notification has no date and is marked "always on top", set today's date
            if (!item.date && item.show_on_top == 1) {
                item.date = new Date().toISOString();  // Set today's date in ISO format
            }

            // Check if the notification ID is in the list of read notifications
            var isRead = readNotifications.includes(item.id);

            if (isRead) {
                readItems.push(item);
            } else {
                unreadItems.push(item);
            }
        });

        // Separate unread notifications marked with "show_on_top" and sort by date
        var topUnreadItems = unreadItems.filter(function(item) {
            return item.show_on_top == 1;
        }).sort(function(a, b) {
            return new Date(b.date) - new Date(a.date); // Sort by date (newest first)
        });

        // Separate read notifications marked with "show_on_top" and sort by date
        var topReadItems = readItems.filter(function(item) {
            return item.show_on_top == 1;
        }).sort(function(a, b) {
            return new Date(b.date) - new Date(a.date); // Sort by date (newest first)
        });

        // Separate the rest of the notifications (those without "show_on_top" flag)
        var normalUnreadItems = unreadItems.filter(function(item) {
            return item.show_on_top != 1;
        });

        var normalReadItems = readItems.filter(function(item) {
            return item.show_on_top != 1;
        });

        /**
         * Generates HTML for a single notification item.
         * 
         * @param {Object} item - The notification item.
         * @returns {string} The HTML string for the notification item.
         */
        function generateItemHTML(item) {
            var date = item.date ? formatNotificationDate(item.date) : '';
            var tag = Array.isArray(item.tag) ? item.tag : item.tag ? [item.tag] : []; // Ensure `tag` is an array
            var post_type_name = item.post_type_name ? item.post_type_name : '';
            var link = item.link ? item.link : '#';
            var id = item.id ? item.id : '';
            var icon = item.icon ? item.icon : '';
            var color = item.color ? item.color : '';
            var tags = Array.isArray(item.tags) ? item.tags : item.tags ? item.tags.split(',') : []; // Convert `tags` to an array if it's a string

            var allTags = [...tag, ...tags];

            var readClass = readNotifications.includes(item.id) ? 'read' : '';
            var hiddenClass = readNotifications.includes(item.id) && hiddenVisibility === 'hide' ? 'hidden' : '';

            var itemHTML = '<li class="notification-item ' + readClass + ' ' + hiddenClass + '" data-id="' + id + '" style="--item-color: ' + color + ';">';
            itemHTML += '<a href="' + link + '" class="notification-link" data-id="' + id + '">' + item.title + '</a>';
            itemHTML += '<div class="item-top">';
            itemHTML += '<div class="notification-icon"><i class="' + icon + ' nch-icon"> </i></div>';
            itemHTML += '<span class="notification-title">' + item.title + '</span>';
            itemHTML += '<span class="mark-read-btn" data-id="' + id + '" title="Mark as read"><i class="' + iconRead + '"></i></span>';
            itemHTML += '</div>';

            itemHTML += '<div class="notification-meta">';
            if (post_type_name) {
                itemHTML += ' <span class="post-type">' + post_type_name + '</span> ';
            }
            if (allTags.length > 0) {
                allTags.forEach(function(tag) {
                    itemHTML += ' <span class="tag">' + tag.trim() + '</span> '; // Ensure each tag is trimmed
                });
            }
            if (date) {
                itemHTML += ' <span class="date">' + date + '</span>';
            }
            itemHTML += '</div>';
            itemHTML += '</li>';

            return itemHTML;
        }

        // Render unread top notifications first
        topUnreadItems.forEach(function(item) {
            html += generateItemHTML(item);
        });

        // Then render normal unread items
        normalUnreadItems.forEach(function(item) {
            html += generateItemHTML(item);
        });

        // Then render normal read items
        normalReadItems.forEach(function(item) {
            html += generateItemHTML(item);
        });

        // Finally, render read top notifications
        topReadItems.forEach(function(item) {
            html += generateItemHTML(item);
        });

        html += '<div class="nch-info" style="display: none;">' + allReadMessage + '</div>';
        html += '</ul>';

        if (showPClogo == 1) {
            html += '<div class="pragmaticcoders-logo-badge"><div class="badge-content"><a href="https://www.pragmaticcoders.com" target="_blank">Notifications Hub by <img src="' + pluginURL + 'assets/img/pragmaticcoders-logo-black.svg"></a></div></div>';
        }

        html += '<div class="notification-tools">';
        html += '<div class="action" id="mark-all-read">' + markAllAsReadMessage + '</div>';
        html += '<div class="action" data-action="' + (hiddenVisibility === 'hide' ? 'show' : 'hide') + '" id="show-hide">' 
        + (hiddenVisibility === 'hide' ? showReadItemsMessage : hideReadItemsMessage) + '</div>';
        html += '</div>';

        $('#nch-notifications').html(html);
        var count = unreadItems.length;
        if (count > 0) {
            $('#nch-notification-count').text(count).show();
        } else {
            $('#nch-notification-count').hide();
        }
    }


    /**
     * Fetches notifications and manages localStorage data.
     * 
     * Checks the user's last visit and determines whether to fetch new notifications
     * or use cached data from localStorage.
     */
    function fetchNotifications() {
        var lastVisitStr = getLocalStorage('pcnch_last_visit');
        var lastVisit;
        var localStorageKey = 'pcnch_notifications';
        var storedData = JSON.parse(localStorage.getItem(localStorageKey));
        var now = new Date().getTime();

        // Handle first visit
        if (!lastVisitStr) {
            lastVisit = new Date();
            var lastVisitTime = formatDate(lastVisit);
            setLocalStorage('pcnch_first_visit', lastVisitTime, 1);
            setLocalStorage('pcnch_visibility_state', 'hide', 365);

            setTimeout(function() {
                setLocalStorage('pcnch_last_visit', lastVisitTime, lifetimeLocalStorage);
            }, 100);
        } else {
            lastVisit = new Date(lastVisitStr);
            if (isNaN(lastVisit.getTime())) {
                lastVisit = new Date();
            }
        }

        if (storedData && storedData.created_at) {
            var storedCreatedAt = new Date(storedData.created_at).getTime();
            if (now - storedCreatedAt !== 0) { 
                fetchDataFromAPI();
                return;
            }
        }

        fetchDataFromAPI();
    }

    /**
     * Fetches notifications data from the API.
     * 
     * Sends the user's last visit time as a query parameter to retrieve
     * new notifications. Stores the response in localStorage.
     */
    function fetchDataFromAPI() {
        var apiUrl = '/wp-json/nch/v1/notifications';
        var params = new URLSearchParams();

        var lastVisitStr = getLocalStorage('pcnch_last_visit');
        if (lastVisitStr) {
            params.append('pcnch_last_visit', formatDate(new Date(lastVisitStr)));
        }

        var now = new Date().getTime();

        fetch(apiUrl + '?' + params.toString(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                var items = data.items;
                var createdAt = data.created_at;

                if (items.length > 0) {
                    displayItems(items);

                    localStorage.setItem('pcnch_notifications', JSON.stringify({
                        created_at: createdAt,
                        items: items
                    }));
                } else {
                    console.warn('No new notifications to display.');
                }
            } else {
                console.error('Error in response:', data.message);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    }

    /**
     * Handles notification link click events.
     * 
     * Marks a notification as read, updates the count, and optionally hides it.
     */
    $(document).on('mousedown', '#nch-notifications .notification-link', function(e) {
        if (e.which === 1 || e.which === 2 || e.ctrlKey || e.shiftKey) {
            var notificationId = $(this).data('id');
            var hiddenVisibility = getLocalStorage('pcnch_visibility_state');

            var clickedNotifications = getClickedNotifications();

            if (notificationId && !clickedNotifications.some(item => item.id === notificationId)) {
                var notificationData = getNotificationById(notificationId);

                if (notificationData) {
                    clickedNotifications.push(notificationData);
                    setClickedNotifications(clickedNotifications); 
                }
            }

            var currentCount = parseInt($('#nch-notification-count').text());
            $('#nch-notification-count').text(currentCount - 1);

            $(this).closest('.notification-item').addClass('read');

            if (hiddenVisibility === 'hide') {
                var $notificationItem = $(this).closest('.notification-item');
                setTimeout(function() {
                    $notificationItem.addClass('hidden');
                }, 100);
            }

            var now = new Date();
            var nowFormatted = formatDate(now);

            if (currentCount - 1 <= 0) {
                setLocalStorage('pcnch_last_visit', nowFormatted);
                $('.pragmaticcoders-nch').removeClass('has-notifications');
                $('#nch-notifications .nch-info').show();
            }

            var linkHostname = this.hostname;
            var currentHostname = location.hostname;
            if (linkHostname && linkHostname !== currentHostname) {
                $(this).attr('target', '_blank');
            }
        }
    });

    /**
     * Marks a single notification as read.
     * 
     * Updates localStorage and hides the notification if necessary.
     */
    $(document).on('click', '.mark-read-btn', function() {
        var $notificationItem = $(this).closest('.notification-item');
        var hiddenVisibility = getLocalStorage('pcnch_visibility_state');

        if (hiddenVisibility === 'hide') {
            $notificationItem.addClass('animate');

            setTimeout(function() {
                $notificationItem.addClass('hidden');
                $notificationItem.removeClass('animate');
            }, 400);
        }

        var notificationId = $(this).data('id');
        var clickedNotifications = getClickedNotifications();

        if (!clickedNotifications.some(item => item.id === notificationId)) {
            var notificationData = getNotificationById(notificationId);

            if (notificationData) {
                clickedNotifications.push(notificationData);
                setClickedNotifications(clickedNotifications); 
            }
        }

        $notificationItem.addClass('read');
        var currentCount = parseInt($('#nch-notification-count').text());
        $('#nch-notification-count').text(currentCount - 1);

        if (currentCount <= 1) {
            $('#nch-notifications .nch-info').show();
            $('#nch-notification-count').text(0).hide();
        }
    });

    /**
     * Toggles visibility of read notifications.
     */
    $(document).on('click', '#show-hide', function() {
        var $this = $(this);
        var action = $this.data('action');
        var readNotificationsData = JSON.parse(localStorage.getItem('pcnch_read_notifications'));

        if (!readNotificationsData || readNotificationsData.expiry <= new Date().getTime()) {
            return;
        }

        var readNotifications = readNotificationsData.items;

        if (action === 'show') {
            readNotifications.forEach(function(notification) {
                $('[data-id="' + notification.id + '"]').removeClass('hidden');
            });
            $this.data('action', 'hide').attr('data-action', 'hide')
                .html(hideReadItemsMessage);
            setLocalStorage('pcnch_visibility_state', 'show', 365);

        } else {
            readNotifications.forEach(function(notification) {
                $('[data-id="' + notification.id + '"]').addClass('hidden');
            });
            $this.data('action', 'show').attr('data-action', 'show')
                .html(showReadItemsMessage);
            setLocalStorage('pcnch_visibility_state', 'hide', 365);
        }
    });

    /**
     * Marks all notifications as read.
     * 
     * Updates localStorage and hides notifications if required.
     */
    $(document).on('click', '#mark-all-read', function() {
        var hiddenVisibility = getLocalStorage('pcnch_visibility_state');
        
        var notifications = JSON.parse(localStorage.getItem('pcnch_notifications')) || { items: [] };

        var readNotificationsData = JSON.parse(localStorage.getItem('pcnch_read_notifications')) || { items: [] };

        var readNotificationIds = readNotificationsData.items.map(function(item) {
            return item.id;
        });

        $('.notification-item').each(function() {
            var notificationId = $(this).data('id');
            
            if (!readNotificationIds.includes(notificationId)) {
                var notification = notifications.items.find(function(item) {
                    return item.id === notificationId;
                });
                if (notification) {
                    readNotificationsData.items.push(notification);
                }
            }

            $(this).addClass('read');

            if (hiddenVisibility === 'hide') {
                $(this).addClass('hidden');
            }
        });

        localStorage.setItem('pcnch_read_notifications', JSON.stringify(readNotificationsData));

        $('#nch-notification-count').text(0).hide();
        $('#nch-notifications .nch-info').show();
    });

    /**
     * Toggles the notifications panel.
     */
    $('#nch-bell-button').on('click', function(e) {
        e.preventDefault();

        $('#nch-notifications').toggle();
        $('.pragmaticcoders-nch').toggleClass('open');
    });

    /**
     * Closes the notifications panel when clicking outside of it.
     */
    $(document).on('click', function(event) {
        var $target = $(event.target);
        if ($('.pragmaticcoders-nch').hasClass('open') 
            && !$target.closest('.pragmaticcoders-nch').length 
            && !$target.closest('#show-hide').length) {
            $('.pragmaticcoders-nch').removeClass('open');
            $('#nch-notifications').hide();
        }
    });

    /**
     * Initializes the notification state on window load.
     */
    jQuery(window).on("load", function () {
        var currentCount = parseInt($('#nch-notification-count').text());
        if (currentCount > 0) {
            $('.pragmaticcoders-nch').addClass('has-notifications');
        } else {
            $('#nch-notifications .nch-info').show();
        }
    });


    if (!isBot()) {
        fetchNotifications();
    }

});
