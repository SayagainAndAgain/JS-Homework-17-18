'use strict;'
var questions=[{question:'Вопрос №1',answers:['Правильный ответ','Вариант ответа №2','Вариант ответа №3'], correctAnswer: 1},
{question:'Вопрос №2',answers:['Вариант ответа №1','Правильный ответ','Вариант ответа №3'], correctAnswer: 2},
{question:'Вопрос №3',answers:['Вариант ответа №1','Вариант ответа №2','Правильный ответ'], correctAnswer: 3}];
var linkBootstrap=function (){
	var fileref=document.createElement('link');
	fileref.setAttribute('rel', 'stylesheet');
	fileref.setAttribute('type', 'text/css');
	fileref.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
	fileref.setAttribute('integrity', 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u');
	fileref.setAttribute('crossorigin', 'anonymous');
	document.getElementsByTagName('head')[0].appendChild(fileref);
}
linkBootstrap();

localStorage.setItem('question',JSON.stringify(questions));

var data = JSON.parse(localStorage.getItem('question'));

	var html = $('#tmpl-script').html();
	

	var content = tmpl(html, data);

var createHTML = function () {
	$('body').html('');
	$('body').append(content);
	$('body').css('background','lightgrey');
	$('#check-answers').click(function (e) {
		doCheck();
	});
}
createHTML();
var doCheck = function (argument) {
	var tempId=0;
	var checkedAnswers = [];
	$('fieldset').each(function () {
		var tempInputId=1;
		checkedAnswers[tempId]=0;
		$(this).find('label').each(function () {
			if (data[tempId].correctAnswer==tempInputId) {
				if (!$(this).find('input').prop('checked')) checkedAnswers[tempId]+=1;
			} 
			else {
				if ($(this).find('input').prop('checked')) checkedAnswers[tempId]+=1; 				
			}
			tempInputId++;
		});
		tempId++;
	});
			var sum = 0;
			$.each(checkedAnswers, function () {
				sum += this;
			});
			console.log(sum, checkedAnswers);
			// createHTML();
			showModal(sum);
}
var showModal = function (e) {
	var msg;
	if (e>0) {msg = 'Sorry, you have failed the test!';} else {msg = 'Congratulations for passing test! Your patience and persistence has finally paid off. Now you are now one step closer to your dream.';}
	var textHtml = '<div class="modal"><div class="modal-content"><span class="ok-button" onclick="createHTML()">OK</span><p>' + msg + '</p></div></div>';
	$('body').append(textHtml);
	$('.modal').css('display', 'block');
}