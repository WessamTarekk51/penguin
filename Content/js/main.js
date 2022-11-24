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
            items: [{
                    type: 2,
                    id: 8,
                    active: true,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: './assets/question/1.png',
                    parag: ['قرب العدد 45.29 لأقرب جزء من عشرة.'],
                    parag2: '45.3',
                    parag3: '45.2',
                    parag4: '45.29 ≈ ',
                    content: [{
                            input: {
                                valid: ['111', '11', '1'],
                                nums: 3,
                            },
                        },
                        {
                            input: {
                                valid: ['1111', '11111'],
                                nums: 2,
                            },
                        }

                    ],
                    
                },
                {
                    type: 2,
                    id: 8,
                    active: true,
                    numberOfquestion: 0,
                    correctCounter: 0,
                    numOfAttempts: 0,
                    image: './assets/question/1.png',
                    parag: ['قرب العدد 45.29 لأقرب جزء من عشرة.'],
                    parag2: '45.3',
                    parag3: '45.2',
                    parag4: '45.29 ≈ ',
                    content: [{
                            input: {
                                valid: ['111', '11', '1'],
                                nums: 3,
                            },
                        },
                        {
                            input: {
                                valid: ['1111', '11111'],
                                nums: 2,
                            },
                        }

                    ],
                    
                }
                
            ],
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
        loQuestion: number = 2,
        finish: null,
        Estimation: null,
        answers: [],
        l: number = 0,

    },
    created() {
        this.shuffle(this.posts[0].items)
        this.nextQuestion()
        this.wrongAnswer.src = '/assets/audios/WrongAnswer.mp3'
        this.rightAnswer.src = '/assets/audios/RightAnswer.mp3'
        this.numberInput()
    },
    mounted() {},
    methods: {
        start() {
            penguinCharacter.playSegments([0, 50], true);
            this.bgAudio.src = '/assets/audios/music.mp3'
            this.muteMusic()
            this.startLo = true
            setTimeout(() => {
              this.sound.src =
                '/assets/audios/Q/Q' + this.posts[0].items[this.counter].id + '.mp3'
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
            this.answers = []
            this.counter += 1
            this.checkBtn = 0
            this.question = false
            this.helpHand = true
            this.click = false
            this.sound.src =
                '/assets/audios/Q/Q' + this.posts[0].items[this.counter].id + '.mp3'
                this.btCheck = document.getElementsByClassName('check')
                this.btAnswer = document.getElementsByClassName('answer')

            this.btNext = document.getElementsByClassName('next')
            this.border = document.getElementsByClassName('border')
            this.questionsNumber = this.posts[0].items.length
            this.btCheck[0]?.classList.remove('pointer-none')
            this.btAnswer[0]?.classList.remove('pointer-none')
            this.btNext[0]?.classList.remove('btn-next-active')
            this.btNext[0] ?.classList.add('btn-next')
            if (this.counter > 0) {
                setTimeout(() => {
                    this.sound.play()
                }, 1500)
                this.soundPlay()
            }
            if (this.questionsNumber != this.counter) {
                this.posts[0].items.forEach((element) => {
                    element.active = false
                })
                this.posts[0].items[this.counter].active = true
                this.numOfAttempts = 0
            }
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
                    }, 1500)
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
            this.posts[0].items.filter((el, i) => {
                if (el.active) {
                  this.content = el.content
                  if (this.answers.length == 0) {
                    el.content.forEach((elem) => {          
                      elem.input.valid.forEach((e) => {          
                        this.answers.push(e.slice())          
                      })
                    })
          
                  }
          
                }
          
              });
            this.index = event.target.getAttribute('index')
            let maxLength = 0
            this.checkBtn = 0
                element.content[this.index - 1].input.valid.forEach((el) => {
                    maxLength = maxLength > el.length ? maxLength : el.length
                })
                console.log(maxLength)
           
            event.target.setAttribute('maxlength', maxLength)

            this.inputs = document.querySelectorAll('.active input')

            this.inputs.forEach((el) => {
                el.value == '' ? this.checkBtn++ : false
            })
        },
        foucs(event) {
            this.helpHand = false
            this.clickBtn.src = '../../assets/audios/click_btn.mp3'
            this.clickBtn.play()
            penguinCharacter.playSegments([0, 50])
            event.target.classList.remove('false')

        },
        checkvalue(event, element) {
            this.l++
            if (element.type == 1) {
                for (const el of element.content[this.index - 1].input.valid) {
                    if (el === event.target.value.trim()) {
                        event.target.classList.add('right')
                        event.target.classList.remove('wrong')
                        event.target.classList.remove('emptyInput')
                        break
                    } else {
                        event.target.classList.remove('right')
                        event.target.classList.add('wrong')
                        event.target.classList.add('emptyInput')
                    }
                }
            } else {
                this.answers=element.content[this.index - 1].input.valid
                console.log(this.answers)
                for (const el of element.content[this.index - 1].input.valid) {
                    this.answers=el
                    console.log(this.answers)
                    if (el === event.target.value.trim()) {
                        let idx = this.answers.indexOf(event.target.value)
                        console.log(idx)
                        // this.answers.value.splice(idx, 1)
                        event.target.classList.add('right')
                        event.target.classList.remove('wrong')
                        event.target.classList.remove('emptyInput')
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
                        // setTimeout(() => {
                        //     this.click = true
                        //     this.question = true
                        //     clearInterval(this.setInterval)
                        //     this.screenClick = 0
                        // }, 5000)
                    }
                }
            })

        },
        numberInput() {
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
        checkanswer() {
            this.checkHand = false
            this.l++
            this.posts[0].items.forEach((el) => {
                if (el.active) {
                    this.content = el.content
                }
            })
            this.clickBtn.src = '/assets/audios/click_btn.mp3'
            this.clickBtn.play()
            this.count = 0
            this.rightBox = document.querySelectorAll('.active .right')
            this.posts[0].items.forEach((el) => {
                if (el.active) {
                    el.correctCounter = document.querySelectorAll('.active .right').length
                }
            })
            this.rightBox.forEach((elem) => {
                elem.classList.remove('false')
                elem.classList.remove('emptyInput')
                elem.classList.add('true')
                this.count += 1
            })
            this.falseBox = document.querySelectorAll('.active .emptyInput')
            this.falseBox.forEach((elem) => {
                elem.classList.remove('true')
                elem.classList.add('false')
                elem.classList.add('emptyInput')

            })

            if (this.falseBox.length === 0) {
                this.btAnswer[0]?.classList.add('pointer-none')
                this.character = true
                    this.rightAnswer.play()
                    penguinCharacter.playSegments([120, 195])
                setTimeout(() => {
                    this.click = true
                    penguinCharacter.playSegments([0, 50])
                    this.question = true
                    clearInterval(this.setInterval)
                    this.screenClick = 0
                }, 3000)

            } else {
                this.wrongAnswer.play()
                this.character = false
                penguinCharacter.playSegments([250, 350])
                this.wrongAnswer.play()
                this.helpHand = false
                this.answerHand = true
            }
        },
        answer() {
            this.posts[0].items.filter((el, i) => {
                if (el.active) {
                  this.content = el.content
                  if (this.answers.length == 0) {
                    el.content.forEach((elem) => {
          
                      elem.input.valid.forEach((e) => {
          
                        this.answers.push(e.slice())
          
                      })
          
          
                    })
          
                  }
          
                }
          
              });
              this.btCheck[0]?.classList.add('pointer-none')
            this.click = true
            this.answerHand = false
            this.sound.pause()
            this.sound.currentTime = 0
            penguinCharacter.playSegments([0, 50])
            document.querySelectorAll('.active .emptyInput').forEach((elem, i) => {
                let type = elem.getAttribute('inputType')
                elem.classList.add('displayinput')
                elem.classList.remove('false')
                elem.classList.remove('wrong')
                let index = elem.getAttribute('index') - 1
                if (type == 1) {
                    elem.value = this.content[index].input.valid[0]
                } else {
                    elem.value = this.answers[i]

                }
            })
            this.btNext[0]?.classList.remove('btn-next')
            this.btNext[0]?.classList.add('btn-next-active')
            this.nextHand = true
        },
        next() {
            this.nextHand = false
            this.character = false
            this.question = true
        },
        home() {
            location.reload()
        },
        focusin(event) {
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
            this.result = 0
            this.posts[0].items.forEach((el) => {
                if (el.correctCounter == el.numberOfquestion) {
                    this.result += 1 / el.numOfAttempts
                }
            })
            this.finish = (this.result * 100) / this.loQuestion
            if (this.finish >= 1 && this.finish <= 50) {
                console.log('ضعيف')
                this.Estimation = 'ضعيف'
                // penguinCharacter.playSegments([0, 20])
            }
            if (this.finish >= 51 && this.finish <= 64) {
                console.log('مقبول')
                this.Estimation = 'مقبول'
            }
            if (this.finish >= 65 && this.finish <= 84) {
                console.log('جيد ')
                this.Estimation = 'جيد'
            }
            if (this.finish >= 85 && this.finish <= 100) {
                console.log('يفوق التوقعات ')
                this.Estimation = 'يفوق التوقعات '
            }
        },
        
    }

})