$(document).on("click", "button.increment", function(evt){
	var el = $(evt.target);
	el.text(parseInt(el.text())+1);
	el.trigger("change");
});


var incrementBinding = new Shiny.InputBinding();
$.extend(incrementBinding,{
	find: function(scope){
		return $(scope).find(".increment");
	},
	getValue:function(el){
		return parseInt($(el).text());
	},
	setValue:function(el, value){
		$(el).text(value);
	},
	subscribe:function(el, tocallafterclick){
		$(el).on("change.incrementBinding", function(e){
			tocallafterclick();
		});
	},
	unsubscribe:function(el){
		$(el).off(".incrementBinding");
	}
});

Shiny.inputBindings.register(incrementBinding);

function tocallafterclick(){
	alert("I am alert after you click!! and I am javascript");
}