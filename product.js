document.getElementById('next').onclick=function(){
	let lists=document.querySelectorAll('.products');//选取所有类名为products的元素，将这些元素储存再lists中
	document.getElementById('slide').appendChild(lists[0]);//将lists中的第一个元素移动到slide元素列表的末尾
}
document.getElementById('previous').onclick=function(){
	let lists=document.querySelectorAll('.products');
	document.getElementById('slide').prepend(lists[lists.length-1]);//将lists中的最后一个元素移动到slide元素列表的开头
}