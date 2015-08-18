app.controller('MainController',['$scope', function($scope)
	{
		$scope.pingyin = ["Nǐ","Hǎo","Qǐng","Wèn","Guì","Xìng","Wǒ","Ne",
		"Xiǎojiě","Jiào","Shénme","Míngzì","Xiānshēng","Lǐ yǒu","Lǐ","Wáng péng","Wáng"];
		$scope.cletter = ['你','好','请',"问","贵","姓","我","呢","小姐","叫",
		"什么","名字","先生","李友","李","王朋","王"];
		$scope.english = ["you","fine, Ok","please","to ask",
		"expensive", "a surname","i and me", "question particle",
		"miss; young lady", "to be call", "what", "name", "Mister", "girl name", 
		"(surname)plum","male name","surnmae"];
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
		//this function is use to print the voc list
		var doc = new jsPDF();
		var up = 30;	
		var count  = 3;
		$scope.printv = function(){
			doc.setTextColor(100);
			doc.text(20, 20, 'This is gray.'); 
			doc.setLineWidth(0.5);
			doc.line(20, 23, 200, 21);
			var height = 30;
			var width = 20;
			var max = $scope.cletter.length;
			console.log(max);

			for(var a=0; a<max; a++){
				doc.text(20, height,$scope.cletter[a]);
				console.log($scope.cletter[a]);
				height = height + 5;

			}
			doc.save('test.pdf');
			console.log("heop");

		}
		// instruction function that will allow the speech to be spoken
		
		$scope.voice = function(word){

			e.preventDefault();
			var text=$('input[name=text]').val();
			text = encodeURIComponent(text);
			var url = "http://translate.google.com/translate_tts?tl=zh-CN&q=" + word;
				$('audio').attr('src', url).get(0).play();
			
		}



		var init = 0;
		var max1 = $scope.pingyin.length - 1;
		$scope.show = $scope.cletter[init]+ "  " +$scope.pingyin[init];
		$scope.sound = $scope.cletter[init];
		$scope.define = $scope.english[init];
	    $scope.key = function($event){
	        console.log($event.keyCode);
	        //left

	        if ($event.keyCode == 39){      	
	        	init = init + 1;
	        	if(init > max1){
	        		init = max1;
	        	}
	        	$scope.show = $scope.cletter[init]+ "  " +$scope.pingyin[init];
	        	$scope.sound = $scope.english[init];
	        	var test = document.getElementById("voicebox").value;
	        	console.log(test);
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



function draw(){
	console.log($scope.cletter[2]);
}
function voice(word){
	$('a.say').on('click',function(e){
	e.preventDefault();
	var text=$('input[name=text]').val();
	text = encodeURIComponent(text);
	var url = "http://translate.google.com/translate_tts?tl=zh-CN&q=" + word;
		$('audio').attr('src', url).get(0).play();
	})
};

