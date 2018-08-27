$(document).ready(function () {

    function fillForm() {
      //questions and answers
        var data = [
            {
                question: 'Кога се сключва трудовият договор?',
                answer1: 'Когато работникът пожелае',
                answer2: 'Преди постъване на работа',
                answer3: 'След постъпване на работа',
                answer4: 'Когато работодателят пожелае',
                rightAnswer: '2'
            },
            {
                question: 'Как се нарича лицето, което е задължено да предостави производствен резултат при сключване на граждански договор?',
                answer1: 'Изълнител',
                answer2: 'Представител',
                answer3: 'Възложител',
                answer4: 'Посредник',
                rightAnswer: '1'
            },
            {
                question: 'Продължителността на краткосрочните кредите е:?',
                answer1: 'До 1 месец',
                answer2: 'До 6 месеца',
                answer3: 'До 1 година',
                answer4: 'Повече от 1 година',
                rightAnswer: '3'
            },
            {
                question: 'При предоставяне на кредит сделката се удостоверява с:?',
                answer1: 'Устна договорка',
                answer2: 'Пълномощно',
                answer3: 'Договор за кредит',
                answer4: 'Не се удостоверява',
                rightAnswer: '3'
            },
            {
                question: 'Какво е задълженето на кредитополучателя?',
                answer1: 'Да изплати кредита и лихвите',
                answer2: 'Да предпостави кредита',
                answer3: 'Да следи за връшането на кредита',
                answer4: 'Няма задължения',
                rightAnswer: '1'
            },
            {
                question: 'Bлaгaйĸи пapични cpeдcтвa в бaнĸa, тя зaплaщa възнaгpaждeниe пoд фopмaтa нa:?',
                answer1: 'Хранителни продукти',
                answer2: 'Лихва',
                answer3: 'Каквото клиента пожелание',
                answer4: 'Банката не заплаща въпреки че използва парите ни',
                rightAnswer: '2'
            },
            {
                question: 'Каква е основната цел на всеки депозит?',
                answer1: 'Да се запазят парите от похарчване',
                answer2: 'Да се предпазят парите от крадци',
                answer3: 'Да се получи доход',
                answer4: 'Нито едно от изброените',
                rightAnswer: '3'
            },
            {
                question: 'Кое НЕ е вид депозит:?',
                answer1: 'Безсрочен депозити',
                answer2: 'Срочен депозит',
                answer3: 'Структуриран депозит',
                answer4: 'Неструктуриран депозит',
                rightAnswer: '4'
            },
            {
                question: 'При депозит от 1000лв за 1 година с годишен лихвен процент 2%, колко пари ще имаме в края на периода:?',
                answer1: '1000лв',
                answer2: '900лв',
                answer3: '1100лв',
                answer4: '1020лв',
                rightAnswer: '4'
            },
            {
                question: 'Коя дейност НЕ може да се извърши с банкова карта?',
                answer1: 'Теглена на пари',
                answer2: 'Внасяне на пари',
                answer3: 'Разплащане',
                answer4: 'Извършване на логически дейности',
                rightAnswer: '4'
            },
            {
                question: 'От какъв материал се изработват банковите карти:?',
                answer1: 'Пластмаса',
                answer2: 'Метал',
                answer3: 'Стъкло',
                answer4: 'Дърво',
                rightAnswer: '1'
            },
            {
                question: 'Кой от елементите НЕ е изписан върху банковата карта:?',
                answer1: 'Номера на картата',
                answer2: 'Името на картодържателя',
                answer3: 'Адреса на картодържателя',
                answer4: 'Срока на валидност',
                rightAnswer: '3'
            },
            {
                question: 'Какъв е размера на минималната заплата към 2017г.:?',
                answer1: '300 лв',
                answer2: '400 лв',
                answer3: '460 лв',
                answer4: '500 лв',
                rightAnswer: '3'
            },
            {
                question: 'За какво трябва да се задели 30% от дохода според правилото 50/30/20?',
                answer1: 'Основни нужди',
                answer2: 'Развлечения',
                answer3: 'Да се спестят',
                answer4: 'За каквото пожелаем',
                rightAnswer: '2'
            },
        ];
        //generating of questions
        var formTemplate = $('<form id=testForm></form>');
        formTemplate.append('<h1 class="headers">Тест за проверка на знанията в областта на финансите</h1>');

        var rightAnswers = [];

        for(var i = 0; i<=6; i++){
            var random = Math.round(Math.random() * (data.length - 1) + 1);


            var template = $('<section>' +
                '<h2>Въпрос ' + (i+1)  + ': ' + data[random-1].question +'</h2>' +
                '<div>' +
                '<input name =' + (i+1) + ' type="radio" value="1"> '+
                '<label>' + data[random-1].answer1 + '</label>' +
                '</div>' +
                '<div>' +
                '<input name=' + (i+1) + ' type="radio" value="2"> '+
                '<label>' + data[random-1].answer2 + '</label>' +
                '</div>' +
                '<div>' +
                '<input name =' + (i+1) + ' type="radio" value="3"> '+
                '<label>' + data[random-1].answer3 + '</label>' +
                '</div>' +
                '<div>' +
                '<input name=' + (i+1) + ' type="radio" value="4"> '+
                '<label>' + data[random-1].answer4 + '</label>' +
                '</div>' +
                '</section>');
           formTemplate.append(template);

            rightAnswers.push(data[random-1].rightAnswer);

            data.splice((random-1), 1);

        }
       formTemplate.append($('<a href="#" id="submit">' +
                             '<img src="../images/tick.png" alt="">' +
                            '</a>'));
        $('main').append(formTemplate);

        $('#submit').click(evaluate);

        //check answers
        function evaluate(ev){
            ev.preventDefault();

            var userAnswers = [];
            var points = 0;

            for(var i = 1; i<=rightAnswers.length; i++){
                userAnswers.push($('input[name=' + i + ']:checked').val());
            }

            for(var i = 0; i<=rightAnswers.length - 1; i++){

                if(rightAnswers[i] == userAnswers[i]){
                    points++;
                }
            }

            $('form').remove();
            var resultTemplate = $('<div id="result"></div>')
            resultTemplate.append($('<h1 class="headers">Резултат</h1>'))
            if(points<=4){
                resultTemplate.append($('<div class="animation"><img  src="../images/sad.png"></div>'));
                resultTemplate.append($('<div class="points">Твоят резултат е ' + points +' точки. Това е незадоволително. По-добре разгледай сайта още веднъж.</div>'));
            }else {
                resultTemplate.append($('<div class="animation"><img  src="../images/happy.png"></div>'));
                resultTemplate.append($('<div class="points">Твоят резултат е ' + points +' точки. Това е задоволително. Поздравления! Ти си готов за това което те очаква.</div>'));
            }
            resultTemplate.append($('<div id="tryAgain"><button  class="buttons">Опитай отново</button></div>'));

            $('main').append(resultTemplate);

            //start test again function
            $('#tryAgain button').click(tryAgain)

            function tryAgain() {
                $('#result').remove();
                fillForm()
            }
        }
    }
    fillForm();
});