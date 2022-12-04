// var penguin = document.querySelector('#penguin');
// var pageUrl = penguin.getAttribute('data-urlpage');
new Vue({
    el: '#penguin',
    data: {
        posts: [{
            counterCorrect: 0,
            LODegree: null,
            UserDegree: null,
            type: '',
            BloomTargets: null,
            randomNumber: null,
            loTargets: null,
            numberOfquestion: 0,
            items: [
                {
                    type: 1,
                    id: 1,
                    active: true,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: "./assets/question/1.png",
                    parag: ["قرب العدد <span class='number'>45.29</span> لأقرب جزء من عشرة."],
                    parag2: "45.3",
                    parag3: "45.2",
                    parag4: "45.29 ≈ ",
                    content: [{
                            input: {
                                valid: ["45.25"],
                               nums: 3
                            }
                        },
                        {
                            input: {
                                valid: ["45.3","45.30"],
                                nums: 2
                            }
                        }
       
                    ]
                },
                {
                    type: 1,
                    id: 2,
                    active: false,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: "./assets/question/1.png",
                    parag: ["قرِّب العدد <span class='number'>16.2</span> لأقرب عدد صحيح."],
                    parag2: "17",
                    parag3: "16",
                    parag4: "16.2 ≈ ",
                    content: [{
                            input: {
                                valid: ["16.5"],
                                nums: 3
                            }
                        },
                        {
                            input: {
                                valid: ["16","16.0"],
                                nums: 2
                            }
                        }
       
                    ]
                },
                {
                    type: 1,
                    id: 3,
                    active: false,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: "./assets/question/1.png",
                    parag: ["قرِّب العدد <span class='number'>2.384</span> لأقرب جزء من مائة."],
                    parag2: "2.390",
                    parag3: "2.380",
                    parag4: "2.384 ≈ ",
                    content: [{
                            input: {
                                valid: ["3.385"],
                                nums: 3
                            }
                        },
                        {
                            input: {
                                valid: ["3.38","3.380"],
                                nums: 2
                            }
                        }
       
                    ]
                },
                {
                    type: 1,
                    id:3,
                    active: false,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: "./assets/question/1.png",
                    parag: ["قرِّب العدد <span class='number'>3.576</span> لأقرب جزء من مائة."],
                    parag2: "3.60",
                    parag3: "3.50",
                    parag4: "3.576 ≈ ",
                    content: [{
                            input: {
                                valid: ["3.55","3.550"],
                                nums: 3
                            }
                        },
                        {
                            input: {
                                valid: ["3.6","3.60"],
                                nums: 2
                            }
                        }
       
                    ]
                },
                {
                    type: 1,
                    id:2,
                    active: false,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: "./assets/question/1.png",
                    parag: ["قرِّب العدد <span class='number'>2.5</span> لأقرب عدد صحيح."],
                    parag2: "3.0",
                    parag3: "2.0",
                    parag4: "2.5 ≈ ",
                    content: [{
                            input: {
                                valid: ["2.5"],
                                nums: 3
                            }
                        },
                        {
                            input: {
                                valid: ["3","3.0"],
                                nums: 2
                            }
                        }
       
                    ]
                },
                {
                    type: 1,
                    id:3,
                    active: false,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: "./assets/question/1.png",
                    parag: ["قرِّب العدد <span class='number'>1.277</span> لأقرب جزء من مائة."],
                    parag2: "1.28",
                    parag3: "1.27",
                    parag4: "1.277 ≈ ",
                    content: [{
                            input: {
                                valid: ["1.275"],
                                nums: 3
                            }
                        },
                        {
                            input: {
                                valid: ["1.28"],
                                nums: 2
                            }
                        }
       
                    ]
                },
                {
                    type: 1,
                    id:2,
                    active: false,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: "./assets/question/1.png",
                    parag: ["قرِّب العدد <span class='number'>65.8</span> لأقرب عدد صحيح."],
                    parag2: "66.0",
                    parag3: "65.0",
                    parag4: "65.8 ≈ ",
                    content: [{
                            input: {
                                valid: ["65.5"],
                                nums: 3
                            }
                        },
                        {
                            input: {
                                valid: ["66","66.0"],
                                nums: 2
                            }
                        }
       
                    ]
                },
                {
                    type: 1,
                    id:1,
                    active: false,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: "./assets/question/1.png",
                    parag: ["قرِّب العدد <span class='number'>45.54</span> لأقرب جزء من عشرة."],
                    parag2: "45.60",
                    parag3: "45.50",
                    parag4: "45.54 ≈ ",
                    content: [{
                            input: {
                                valid: ["45.55"],
                                nums: 3
                            }
                        },
                        {
                            input: {
                                valid: ["45.5","45.50"],
                                nums: 2
                            }
                        }
       
                    ]
                },
                {
                    type: 1,
                    id:3,
                    active: false,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: "./assets/question/1.png",
                    parag: ["قرِّب العدد <span class='number'>3.576</span> لأقرب جزء من مائة."],
                    parag2: "10.0",
                    parag3: "9.90",
                    parag4: "9.999 ≈ ",
                    content: [{
                            input: {
                                valid: ["9.95"],
                                nums: 3
                            }
                        },
                        {
                            input: {
                                valid: ["10","10.0","10.00"],
                                nums: 2
                            }
                        }
       
                    ]
                },
                {
                    type: 1,
                    id:1,
                    active: false,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: "./assets/question/1.png",
                    parag: ["قرِّب العدد <span class='number'>1.07</span> لأقرب جزء من عشرة."],
                    parag2: "1.10",
                    parag3: "1.00",
                    parag4: "1.07 ≈ ",
                    content: [{
                            input: {
                                valid: ["1.05"],
                                nums: 3
                            }
                        },
                        {
                            input: {
                                valid: ["1.1","1.10"],
                                nums: 2
                            }
                        }
       
                    ]
                },
                {
                    type: 1,
                    id:3,
                    active: false,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: "./assets/question/1.png",
                    parag: ["قرِّب العدد <span class='number'>1.209</span> لأقرب جزء من مائة."],
                    parag2: "1.210",
                    parag3: "1.200",
                    parag4: "1.209 ≈ ",
                    content: [{
                            input: {
                                valid: ["12.05"],
                                nums: 3
                            }
                        },
                        {
                            input: {
                                valid: ["1.21","1.210"],
                                nums: 2
                            }
                        }
       
                    ]
                },
                {
                    type: 1,
                    id:2,
                    active: false,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: "./assets/question/1.png",
                    parag: ["قرِّب العدد <span class='number'>5.4</span> لأقرب عدد صحيح."],
                    parag2: "6.0",
                    parag3: "5.0",
                    parag4: "5.4 ≈ ",
                    content: [{
                            input: {
                                valid: ["5.5"],
                                nums: 3
                            }
                        },
                        {
                            input: {
                                valid: ["6","6.0"],
                                nums: 2
                            }
                        }
       
                    ]
                }


               
            ]
        }],
        startLo: false,
        setInterval: null,
        question: false,
        counter: number = -1,
        numSound: number = -1,
        music: boolean = false,
        index: null,
        rightBox: null,
        falseBox: null,
        count: number = 0,
        questionsNumber: number = -1,
        questionNumber: number = 0,
        bgAudio: new Audio(),
        clickBtn: new Audio(),
        wrongAnswer: new Audio(),
        rightAnswer: new Audio(),
        sound: new Audio(),
        screenClick: number = 0,
        sec: null,
        numOfAttempts: number = 0,
        btCheck: null,
        btAnswer: null,
        btNext: null,
        content: null,
        checkBtn: number = 0,
        character: boolean = true,
        inputs: null,
        helpHand: boolean = true,
        checkHand: boolean = false,
        answerHand: boolean = false,
        nextHand: boolean = false,
        try: null,
        border: null,
        containerClass: null,
        shuffled: [],
        click: boolean = false,
        result: number = 0,
        loQuestion: number = 6,
        finish: null,
        Estimation: null,
        answers: [],
        showAnswers: [],
        test : number =0,
        inactiveInputs:null
    },
    created() {
        this.shuffle(this.posts[0].items)
        console.log(this.posts[0])
        this.nextQuestion()
        this.wrongAnswer.src = './assets/audios/wronganswer.mp3'
        this.rightAnswer.src = './assets/audios/rightanswer.mp3'
    },
    mounted() {
        this.posts[0].numberOfquestion = this.loQuestion
        console.log(this.posts[0].numberOfquestion)
        finalResponse.submitData(JSON.stringify(this.posts[0]), 1);
    },
    methods: {
        start() {
            penguinCharacter.playSegments([0, 50], true);
            this.bgAudio.src = './assets/audios/music.mp3'
            this.muteMusic()
            this.startLo = true
            setTimeout(() => {
              this.sound.src =
                './assets/audios/q/q' + this.posts[0].items[this.counter].id + '.mp3'
              this.sound.play()
            }, 1000)
            this.soundPlay()
          },
        muteMusic() {
            this.music = !this.music
            this.bgAudio.loop = true
            this.bgAudio.paused ? this.bgAudio.play() : this.bgAudio.pause()
        },
         nextQuestion() {
            this.test=0
            this.counter += 1
            console.log(this.counter)
            console.log(this.helpHand)
            console.log( this.posts[0].numberOfquestion)
            this.answers = []
            this.checkBtn = 0
            this.question = false
            this.click = false
            this.sound.src =
                './assets/audios/q/q' + this.posts[0].items[this.counter].id + '.mp3'
            this.btCheck = document.getElementsByClassName('check')
            this.btAnswer = document.getElementsByClassName('answer')
            this.btNext = document.getElementsByClassName('next')
            this.border = document.getElementsByClassName('border')
            this.questionsNumber = this.posts[0].items.length
            this.btCheck[0]?.classList.remove('pointer-none')
            this.btAnswer[0]?.classList.remove('pointer-none')
            this.btNext[0]?.classList.remove('btn-next-active')
            this.btNext[0] ?.classList.add('btn-next')
            this.btCheck[0]?.classList.remove('btn-check')
            this.btAnswer[0]?.classList.remove('btn-answer')
            if (this.counter > 0) {
                setTimeout(() => {
                    this.sound.play()
                }, 500)
                this.soundPlay()
            }
            if (this.questionsNumber != this.counter) {
                this.posts[0].items.forEach((element) => {
                    element.active = false
                })
                this.posts[0].items[this.counter].active = true
                this.numOfAttempts = 0
            }
            this.posts[0].items.forEach((el) => {
                if (el.type == 1) {
                    el.numberOfquestion = el.content.length
                } else {
                    el.content.forEach((elem) => {
                        el.numberOfquestion = +elem.input.nums
                    })
                }
            })
           
        },
        soundPlay() {
            this.sound.addEventListener('loadedmetadata', (event) => {
                this.sec = this.sound.duration + 10
            })
            this.setInterval = setInterval(() => {
                this.screenClick += 1
                if (this.screenClick == Math.floor(this.sec)) {
                    setTimeout(() => {
                        this.sound.play()
                        this.screenClick = 0
                    }, 10)
                }
            }, 1000)
        },
        setclick() {
            this.sound.pause()
            this.sound.currentTime = 0
            clearInterval(this.setInterval)
            this.screenClick = 0
            if (this.click == false) {
                this.soundPlay()
            }
        },

        maxLength(event, element) {
            this.checkBtn = 0
            this.posts[0].items.filter((el) => {
                if (el.active) {
                  this.content = el.content;
                  this.answers = el.content.slice();
                  if (this.showAnswers.length == 0) {
                    el.content.forEach((elem) => {
                      elem.input.valid.forEach((e) => {
                        this.showAnswers.push(e.slice());
                      });
                    });
                    // console.log(this.showAnswers);
                  }
                }
              });
        
              this.index = event.target.getAttribute("index");
              let maxLength = 0;
              element.content[this.index - 1].input.valid.forEach((el) => {
                maxLength = maxLength > el.length ? maxLength : el.length;
              });
              event.target.setAttribute("maxlength", maxLength);
              this.inputs = document.querySelectorAll('.active input')
              this.inputs.forEach((el) => {
                // console.log(el)
                el.value == '' ? this.checkBtn++ : false
                // console.log('checkBtn = ' + this.checkBtn)
              })
             if (this.checkBtn - 1  == 0) {
               this.checkHand = true
             } else {
               this.checkHand = false
               this.answerHand = false

              }
        },
        foucs(event) {
            this.helpHand = false
            this.clickBtn.src = './assets/audios/click_btn.mp3'
            this.clickBtn.play()
            penguinCharacter.playSegments([0, 50])
            event.target.classList.remove('wrong')

        },
        checkvalue(event, element) {
            this.inactiveInputs = document.querySelectorAll(".active .inactive");
            console.log(this.inactiveInputs.length);
            if (element.type == 1) {
                for (const el of element.content[this.index - 1].input.valid) {
                    if (el === event.target.value.trim()) {
                        event.target.classList.add('right')
                        event.target.classList.remove('wrong')
                        event.target.classList.remove('emptyInput')
                        this.test+=1;
                        break
                    } else {
                        event.target.classList.remove('right')
                        event.target.classList.add('wrong')
                        event.target.classList.add('emptyInput')
                    }
                }
            } else {
                for (const elem of this.answers[this.index - 1].input.valid) {
                    if (elem === event.target.value.trim()) {
                      let idx = this.answers[this.index - 1].input.valid.indexOf(
                        event.target.value
                      );
                      this.answers[this.index - 1].input.valid.splice(idx, 1);
                        event.target.classList.add('right')
                        event.target.classList.remove('wrong')
                        event.target.classList.remove('emptyInput')
                        this.test+=1;
                        break
                    } else {
                        event.target.classList.remove('right')
                        event.target.classList.add('wrong')
                        event.target.classList.add('emptyInput')
                    }
            }
            }

            this.posts[0].items.forEach((el) => {
                if (el.active) {
                    el.correctCounter = document.querySelectorAll('.active .right').length
                    if (element.correctCounter == element.numberOfquestion) {
                        this.character = true
                        this.isAllQuestionsRight();
                    }
                }
            })
            console.log("num of test = " + this.test)
            console.log("numberOfquestions" +  element.numberOfquestion)

            if (this.test === element.numberOfquestion - this.inactiveInputs.length) {
                this.inactiveInputs.forEach((el) => {
                  el.classList.remove("inactive");
                  el.classList.add("activeInput");


                });
              }
        
              if (this.test === element.numberOfquestions) {
                this.isAllQuestionsRight();
                this.finished();
              }
        },
     
        checkanswer() {
            this.checkHand = false
            this.posts[0].items.forEach((el) => {
                if (el.active) {
                    this.content = el.content
                }
            })
            this.clickBtn.src = './assets/audios/click_btn.mp3'
            this.clickBtn.play()
            this.count = 0
            this.rightBox = document.querySelectorAll('.active .right')
            this.posts[0].items.forEach((el) => {
                if (el.active) {
                    el.correctCounter = document.querySelectorAll('.active .right').length
                }
            })
            this.rightBox.forEach((elem) => {
                elem.classList.remove('wrong')
                elem.classList.remove('emptyInput')
                elem.classList.add('true')
                this.count += 1
            })
            this.falseBox = document.querySelectorAll('.active .emptyInput')
            this.falseBox.forEach((elem) => {
                elem.classList.remove('true')
                elem.classList.add('wrong')
                elem.classList.add('emptyInput')

            })
            if (this.falseBox.length === 0 && this.inactiveInputs.length == 0) {
                // this.isAllQuestionsRight();
            } 
            else if(this.falseBox.length === 0){
                penguinCharacter.playSegments([130, 195])

            }
            else {
                this.wrongAnswer.play()
                this.character = false
                penguinCharacter.playSegments([265, 350])
                this.wrongAnswer.play()
                this.helpHand = false
                this.answerHand = true
            }
        },
        answer() {
            document.querySelectorAll(".active .activeInput").forEach((el) => {
                el.classList.remove("activeInput");
                el.classList.add("emptyInput");
              });
              document.querySelectorAll(".active .inactive").forEach((el) => {
                el.classList.remove("inactive");
                el.classList.add("emptyInput");
              });
            this.clickBtn.src = './assets/audios/click_btn.mp3'
            this.clickBtn.play()
            this.helpHand =false
            this.posts[0].items.filter((el) => {
                if (el.active) {
                  this.content = el.content;
                  if (this.showAnswers.length == 0) {
                    el.content.forEach((elem) => {
                      elem.input.valid.forEach((e) => {
                        this.showAnswers.push(e.slice());
                      });
                    });
                  }
                }
              });
              this.btCheck[0]?.classList.add('btn-check')
              this.btCheck[0]?.classList.add('pointer-none')
              this.btAnswer[0]?.classList.add('btn-answer')
              this.btAnswer[0]?.classList.add('pointer-none')
            this.click = true
            this.answerHand = false
            this.checkHand = false
            this.sound.pause()
            this.sound.currentTime = 0
            penguinCharacter.playSegments([0, 50])
            document.querySelectorAll('.active .emptyInput').forEach((elem, i) => {
                let type = elem.getAttribute('inputType')
                elem.classList.add('displayinput')
                elem.classList.remove('wrong')
                let index = elem.getAttribute('index') - 1
                if (type == 1) {
                    elem.value = this.content[index].input.valid[0]
                } else {
                    elem.value = this.showAnswers[i]

                }
            })
            this.btNext[0]?.classList.remove('btn-next')
            this.btNext[0]?.classList.add('btn-next-active')
            this.nextHand = true
            this.finished()
        },
        next() {
            this.clickBtn.src = './assets/audios/click_btn.mp3'
            this.clickBtn.play()
            this.nextHand = false
            this.character = false
            this.question = true
            this.calculate()
        },
        home() {
            location.reload()
        },
        focusin(event) {
                        penguinCharacter.playSegments([0, 50])
            this.helpHand = false
            if (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent,
                )
            ) {
                this.containerClass = document.getElementsByClassName('penguin')
                if (innerWidth > innerHeight) {
                    if (event.target.offsetTop > innerHeight / 3) {
                        this.border[0].style.cssText = `padding-bottom: ${innerHeight / 30}vw`
                        this.border[0].scrollTop = innerHeight / 30
                    }
                }
            }
        },
        focusout(event) {
            this.border[0].style.cssText = 'padding-bottom: 0vw ;'
        },
        shuffle(a) {
            var j, x, i
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1))
                x = a[i]
                a[i] = a[j]
                a[j] = x
            }
            this.shuffled = a.slice(0, this.loQuestion)
        },
        calculate() {
            // console.log("norhan" +this.result )
            this.result=0
            this.posts[0].items.forEach((el) => {
                if (el.correctCounter == el.numberOfquestion) {
                    this.result +=1; 
                }
            })
            this.finish = (this.result * 100) / this.loQuestion
            console.log(this.finish)
            if (this.finish == 0 ) {
                console.log('ضعيف')
                this.Estimation = 'ضعيف';
                progressbar.playSegments([0, 1],true)
            }
            if (this.finish >= 1 && this.finish <= 50) {
                console.log('ضعيف')
                this.Estimation = 'ضعيف';
                progressbar.playSegments([0, 57],true)
            }
            if (this.finish >= 51 && this.finish <= 64) {
                console.log('مقبول')
                this.Estimation = 'مقبول'
                progressbar.playSegments([0, 69],true)
            }
            if (this.finish >= 65 && this.finish <= 84) {
                console.log('جيد ')
                progressbar.playSegments([0, 84],true)
                this.Estimation = 'جيد'
            }
            if (this.finish >= 85 && this.finish <= 100) {
                console.log('يفوق التوقعات ')
                progressbar.playSegments([0, 101],true)
                this.Estimation = 'يفوق التوقعات '
            }

        },
        isAllQuestionsRight(){
            this.btAnswer[0]?.classList.add('pointer-none')
            this.posts[0].counterCorrect++;
            console.log(this.posts[0].counterCorrect)
            this.character = true
            this.checkHand = false

                this.rightAnswer.play()
                penguinCharacter.playSegments([130, 195])
                this.finished()
            setTimeout(() => {
                this.click = true
                penguinCharacter.playSegments([0, 50])
                this.calculate()
                clearInterval(this.setInterval)
                this.screenClick = 0
                this.question = true
            }, 4000)
        },
        finished() {
            this.posts[0].counterCorrect === this.posts[0].numberOfquestion ?
                finalResponse.submitData(JSON.stringify(this.posts[0]), 4) :
                finalResponse.submitData(JSON.stringify(this.posts[0]), 1);

        }
        
    }

})