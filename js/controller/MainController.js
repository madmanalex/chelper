app.controller('MainController',['$scope', function($scope)
	{
		$scope.pingyin = ["Nǐ","Hǎo","Qǐng","Wèn","Guì","Xìng","Wǒ","Ne",
		"Xiǎojiě","Jiào","Shénme","Míngzì","Xiānshēng","Lǐ yǒu","Lǐ","Wáng péng","Wáng"];
		$scope.cletter = ['你','好','请',"问","贵","姓","我","呢","小姐","叫",
		"什么","名字","先生","李友","李","王朋","王"];
		$scope.english = ["you","fine, Ok","please","to ask",
		"expensive", "a surname","i and me", "question particle",
		"miss; young lady", "to be call", "what", "name", "Mister", "girl name", 
		"(surname)plum","male name","surname"];
		$scope.cletter2 = ["是","老师","吗","不","学生","也","人","中国","北京","美国","纽约"];
		$scope.pingyin2 = ["Shì","Lǎoshī","Ma","Bù","Xuéshēng","Yě","Zhōngguó","Rén","Běijīng","Měiguó","Niǔyuē"];
		$scope.english2 = ["to be", "teacher"," end of question(to comfirm a question)", "not","student","too, also","people","China","Beijing","America", "New York"];
		$scope.img = "http://www.chinese-tools.com/jdd/public/documents/charord/60/20320.gif";
		// for one time speech function
		$scope.speech = function(word,sound){
			var msg = new SpeechSynthesisUtterance();
			var voices = window.speechSynthesis.getVoices();
			msg.voice = voices[10]; // Note: some voices don't support altering params
			msg.voiceURI = 'native';
			msg.volume = 1; // 0 to 1
			msg.rate = 1; // 0.1 to 10
			msg.pitch = 1; 
			msg.text = word;
			msg.lang = 'zh-CN';
			msg.onend = function(e) {
		    console.log('Finished in ' + event.elapsedTime + ' seconds.');
			};
			speechSynthesis.speak(msg);
		}
		// instruction function that will allow the speech to be spoken
		
		$scope.voice = function(word){

			e.preventDefault();
			var text=$('input[name=text]').val();
			text = encodeURIComponent(text);
			var url = "http://translate.google.com/translate_tts?tl=zh-CN&q=" + word;
				$('audio').attr('src', url).get(0).play();
			
		}
		// allow for the random function to work for the word of the day to work
		$scope.random_word = function(){
			var x = Math.floor((Math.random() * ($scope.cletter.length - 1)) + 0);
    		document.getElementById("word").innerHTML = $scope.cletter[x];
    		$("#animal").hide();
    		$("#question").hide();
    		$("#word").show();
		}
		// allow for the random function to work for the word of the day to work
		$scope.random_question = function(){
			var x1 = "Translate: hello there, can i ask want is your surname";
    		document.getElementById("question").innerHTML = x1;
    		$("#animal").hide();
    		$("#question").show();
    		$("#word").hide();
		}
		// allow for the random animal function
		$scope.random_animal = function(){
    		document.getElementById("pic").src = "c.jpg";
    		$("#animal").show();
    		$("#question").hide();
    		$("#word").hide();
		}

		var x;
		$scope.random = function(){
			x = Math.floor((Math.random() * ($scope.cletter.length - 1)) + 0);var x = Math.floor((Math.random() * ($scope.cletter.length - 1)) + 0);
			$scope.show = $scope.english[x];
			return x;
		}
		$scope.check = function(){
			$scope.show = $scope.cletter[x];
		}


		// flash card function
		var init = 0;
		var max1 = $scope.pingyin.length - 1;
		$scope.show = $scope.cletter[init]+ "  " +$scope.pingyin[init];
		$scope.sound = $scope.cletter[init];
		$scope.define = $scope.english[init];

	    $scope.key = function($event){


	        //left
	        if ($event.keyCode == 39){      	
	        	init = init + 1;
	        	if(init > max1){
	        		init = max1;
	        	}
	        	$scope.show = $scope.cletter[init]+ "  " +$scope.pingyin[init];
	        	$scope.sound = $scope.english[init];
	        	var test = document.getElementById("voicebox").value;
	        }
	        //up
	        else if ($event.keyCode == 38){
	            $scope.show = $scope.cletter[init]+" " + $scope.pingyin[init];
	        }
	        //right
	        else if ($event.keyCode == 37){
	        	init = init - 1;
	        	
	        	if(init < 0){
	        		init = 0;
	        	}
	        	$scope.show = $scope.cletter[init]+ "  " +$scope.pingyin[init];
	        	
	        }
	        //down
	        else if ($event.keyCode == 40){
	            $scope.show =$scope.english[init];
		    }
		}
		$scope.show = $scope.cletter[init]+ "  " +$scope.pingyin[init];
		

}]);



$("body").css("overflow", "hidden");


function sound(word){
			var msg = new SpeechSynthesisUtterance();
			var voices = window.speechSynthesis.getVoices();
			
			msg.voice = voices[10]; // Note: some voices don't support altering params
			msg.voiceURI = 'native';
			msg.volume = 1; // 0 to 1
			msg.rate = 1; // 0.1 to 10
			msg.pitch = 1; //0 to 2
			msg.text = word;
			msg.lang = 'en-US';
			msg.onend = function(e) {
		    console.log('Finished in ' + event.elapsedTime + ' seconds.');
			};
			return speechSynthesis.speak(msg);
};

function voice(word){
	$('a.say').on('click',function(e){
	e.preventDefault();
	var text=$('input[name=text]').val();
	text = encodeURIComponent(text);
	var url = "http://translate.google.com/translate_tts?tl=zh-CN&q=" + word;
		$('audio').attr('src', url).get(0).play();
	})
};

