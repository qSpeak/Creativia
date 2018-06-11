jQuery(document).ready(function(){
// Скрываем все спойлеры
// по клику отключаем класс folded, включаем unfolded, затем для следующего
// элемента после блока .spoiler-head (т.е. .spoiler-body) показываем текст спойлера
jQuery('.spoiler__title').click(function(){
jQuery(this).next().slideToggle()
 if (jQuery(this).find('>:first-child').hasClass('svg-inline--fa fa-plus-circle fa-w-16'))
{
jQuery(this).find('>:first-child').removeClass('svg-inline--fa fa-plus-circle fa-w-16')
jQuery(this).find('>:first-child').addClass('svg-inline--fa fa-minus-circle fa-w-16')
}
else
{
jQuery(this).find('>:first-child').removeClass('svg-inline--fa fa-minus-circle fa-w-16')
jQuery(this).find('>:first-child').addClass('svg-inline--fa fa-plus-circle fa-w-16')
}
	})

	})