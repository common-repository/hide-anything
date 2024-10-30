import unique from 'unique-selector';

const DomOutline = function (options) {
    options = options || {};

    const pub = {};
    const self = {
        opts: {
            namespace: options.namespace || 'DomOutline',
            borderWidth: options.borderWidth || 2,
            onClick: options.onClick || false,
            filter: options.filter || false
        },
        keyCodes: {
            BACKSPACE: 8,
            ESC: 27,
            DELETE: 46
        },
        active: false,
        initialized: false,
        elements: {}
    };

    function writeStylesheet(css) {
        var element = document.createElement('style');
        element.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(element);

        if (element.styleSheet) {
            element.styleSheet.cssText = css; // IE
        } else {
            element.innerHTML = css; // Non-IE
        }
    }

    function initStylesheet() {
        if (self.initialized !== true) {
            var css = `
                .${self.opts.namespace}{
                    background: #09c;
                    position: absolute;
                    z-index: 1000000;
                }
                
                .${self.opts.namespace}_label {
                    background: #09c;
                    border-radius: 2px;
                    color: #fff;
                    font: bold 12px/12px Helvetica, sans-serif;
                    padding: 4px 6px;
                    position: absolute;
                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
                    z-index: 1000001;
                }`;

            writeStylesheet(css);
            self.initialized = true;
        }
    }

    function createOutlineElements() {
        self.elements.label = jQuery('<div></div>').addClass(self.opts.namespace + '_label').appendTo('body');
    }

    function removeOutlineElements() {
        jQuery.each(self.elements, function (name, element) {
            element.remove();
        });
    }

    function getScrollTop() {
        if (!self.elements.window) {
            self.elements.window = jQuery(window);
        }
        return self.elements.window.scrollTop();
    }

    function shouldIgnore(e) {

        const selector = unique(e.target, {
            excludeRegex: RegExp('hide-anything-hidden')
        });

        if (Object.keys(hideAnything.selectors).includes(selector)) {
            return true;
        }


        if (typeof e.target.className === "string" && e.target.className.indexOf(self.opts.namespace) !== -1) {
            return true;
        }

        if (typeof e.target.className === "string" && e.target.className.indexOf('hide-anything') !== -1) {
            return true;
        }


        return false;
    }

    function updateOutlinePosition(e) {

        if (shouldIgnore(e)) {
            removeOutlineElements();
            return;
        } else {
            if (!jQuery('.DomOutline_label').length) {
                createOutlineElements();
            }
        }

        if (self.opts.filter) {
            if (!jQuery(e.target).is(self.opts.filter)) {
                return;
            }
        }

        pub.element = e.target;

        const b = self.opts.borderWidth;
        const scroll_top = getScrollTop();
        const pos = pub.element.getBoundingClientRect();
        const top = pos.top + scroll_top;
        const {width, height} = pos;

        //var label_text = compileLabelText(pub.element, pos.width, pos.height);
        const label_text = `<i class="dashicons dashicons-hidden"></i> <span class="hide-anything-hide-text">Hide</span> <span class="DomOutline_border"></span>`;
        const label_top = Math.max(0, top - 27 - b, scroll_top);
        const label_left = Math.max(0, pos.left - b);

        self.elements.label.css({top: label_top, left: label_left}).html(label_text);
        jQuery('.DomOutline_border').css({width, height});
    }

    function stopOnEscape(e) {
        if (e.keyCode === self.keyCodes.ESC || e.keyCode === self.keyCodes.BACKSPACE || e.keyCode === self.keyCodes.DELETE) {
            pub.stop();
        }

        return false;
    }

    function clickHandler(e) {
        //pub.stop();
        self.opts.onClick(e, pub.element);

        return false;
    }

    pub.start = function () {
        initStylesheet();
        if (self.active !== true) {
            self.active = true;
            createOutlineElements();
            jQuery('body').on('mousemove.' + self.opts.namespace, updateOutlinePosition);
            jQuery('body').on('keyup.' + self.opts.namespace, stopOnEscape);
            if (self.opts.onClick) {
                setTimeout(function () {
                    jQuery('body').on('click.' + self.opts.namespace, function (e) {

                        if (shouldIgnore(e)) {
                            return;
                        }

                        if (self.opts.filter) {
                            if (!jQuery(e.target).is(self.opts.filter)) {
                                return false;
                            }
                        }
                        clickHandler.call(this, e);
                    });
                }, 50);
            }
        }
    };

    pub.stop = function () {
        self.active = false;
        removeOutlineElements();
        jQuery('body').off('mousemove.' + self.opts.namespace)
            .off('keyup.' + self.opts.namespace)
            .off('click.' + self.opts.namespace);
    };

    return pub;
};

export default DomOutline;