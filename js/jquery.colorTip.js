define(['jquery'],function($) {

	return {

		$tip: null,

		tip: function() {

			if(!this.$tip) {
				this.$tip = $('<div class="color-tip-wrapper"></div>').html('<div class="color-tip"></div>');
			}
			return this.$tip;
		},

		getMsg: function(options) {

			var msg;

			if(typeof options == "string") {
				msg = options;
			} else if(typeof options.msg == 'function') {
				msg = options.msg.call(null);
			}

			msg = ('' + msg).replace(/(^\s+|\s+$)/,"");
			return msg || options.fallback;
		},

		show: function(options,success) {
			
			var that = this;

			var msg = this.getMsg(options);

			if(msg) {
				var $tip = this.tip();
			}

			if(success) {
				$tip.find('.color-tip').addClass('color-tip-success').html(msg);
			} else {
				$tip.find('.color-tip').removeClass('color-tip-success').html(msg);
			}
			
			$tip.remove().prependTo(document.body).hide();
			$tip.slideDown();

			setTimeout(function(){
				
				that.hide();
			}, 1200);

		},

		hide: function() {

			this.tip().stop().fadeOut(1500);
		},

		success: function(options) {

			this.show(options,true);
		},

		error: function(options) {
			this.show(options,false);
		}
	}

});