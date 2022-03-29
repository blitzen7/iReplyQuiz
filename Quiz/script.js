const quizData = [
    { 
        question: "1. In Windows OS, what is the default timezone of a computer?",
        a: "Eastern Time",
        b: "UTC 0:00",
        c: "Depends on what Timezone is configured during setup.",
        d: "PHT",
        e: "None of the above.",
        
    correct: "c",
    },
    { 
        question: "2. Which of the following is not part of the MS Office programs?",
        a: "MS InfoPath",
        b: "MS Word",
        c: "MS Powerpoint",
        d: "MS Excel",
        e: "None of the above",
        correct: "e",
    },

    { 
        question: "3. To be able to access/launch a software/program from desktop screen, a ________ of the software/program needs to be created.",
        a: "Quick Link",
        b: "Easy Access",
        c: "Shortcut",
        d: "Fast Launch",
        e: "None of the above.",
        correct: "c",
    },
    { 
        question: "4. For files that are deleted(not permanently), where can these files be restored from?",
        a: "System Restore",
        b: "Recycle Trash",
        c: "Trash Bin",
        d: "Recycle Bin",
        e: "All of the above.",
        correct: "d",
    },
    {
        question: "5. If the 'C' key on your keyboard is not working, how are you able to copy files,texts,images,etc on your Windows PC?",
        a: "Use the mouse>right click>paste.",
        b: "Use the mouse>right click>copy.",
        c: "No other way.",
        d: "Ctrl+C",
        e: "All of the above.",
        correct: "b",
    },
    {
        question: "6. After plugging in your Printer, you suspect that it is not detected by your computer. Which feature of the Windows can we verify if this is the case?",
        a: "Programs and Features",
        b: "Program files.",
        c: "System32",
        d: "All of the above.",
        e: "Devices and Printers",
        correct: "e",
    },
    {
        question: "7. What is the keyboard shortcut command for shut down options your Windows PC? ",
        a: "Type 'shutdown' on the key board.",
        b: "Alt+F+4 then Enter.",
        c: "Escape+Enter",
        d: "All of the above.",
        e: "Windows Key+X",
        correct: "e",
    },
    {
        question: "8. After booting your Windows PC, you noticed that the icons are now larger and there are missing programs from the desktop. What is the possible cause of the scenario?",
        a: "Computer has been hacked.",
        b: "Computer is on Safemode.",
        c: "Computer resolution has been adjusted.",
        d: "Computer has been upgraded.",
        e: "All of the above.",
        correct: "b",
    },
    {
        question: "9.  In Windows OS, where can we see the full list of programs installed on your computer?",
        a: "Programs and Features",
        b: "Services",
        c: "NCPA.CPL",
        d: "Command Prompt",
        e: "None of the above",
        correct: "a",
    },
    {
        question: "10.  On your Windows computer where is the WiFi/Internet Connectivity Icon usually located?",
        a: "In the center of the desktop screen.",
        b: "In the browser URL.",
        c: "Beside the Start button.",
        d: "Along with the Time and Date Tray.",
        e: "None of the above.",
        correct: "d",
    },
    {
        question: "11.  What does an exclamation point on the WiFi icon mean?",
        a: "High Speed Internet",
        b: "Slow Internet",
        c: "No Internet",
        d: "Normal Internet",
        e: "All of the above.",
        correct: "c",
    },
    {
        question: "12.  Is a computer password necessary on Work From Home scenario?",
        a: "Yes",
        b: "No",
      
        correct: "a",
    },
    {
        question: "13.  What is the best password among the choices?",
        a: "1234",
        b: "A1B2C3",
        c: "TheMostDifficultPassword",
        d: "S1mpL3P@$sw0rD!",
        e: "All of the above.",
        correct: "d",
    },
    {
        question: "14. Your Windows computer is prompting that you only have 500MB of space in your hard drive and cannot proceed to install a new  important software from work. What should you do?",
        a: "Delete the document files from work.",
        b: "Keep the photos and videos from your last summer vacation.",
        c: "Upload the files to the Cloud.",
        d: "Buy another computer.",
        e: "All of the above.",
        correct: "c",
    },
    {
        question: "15. Upon logging in to your computer, you are not seeing the Chrome browser in your desktop. You need to access files from your webmail. What should you do?",
        a: "Restart the computer.",
        b: "Wait for a few minutes as the computer might just be slow.",
        c: "Check in the list of programs is Chrome is still installed. If not, use another browser to access webmail.",
        d: "File a leave and not report for the day.",
        e: "All of the above.",
        correct: "c",
    },

    {
        question: "16. Which among the choices is not an example of an email client.",
        a: "Outlook",
        b: "Thunderbird",
        c: "Apple Mail",
        d: "Twitter",
        e: "All of the above.",
        correct: "d",
    },
    {
        question: "17. Your company required you to create your email address and you will use it for work related online communication. Which of the following email examples is appropriate?",
        a: "thedarkknight@company.com",
        b: "serioushardworker@company.com",
        c: "simpleandcute_name@company.com",
        d: "<namelastname>@company.com",
        e: "iamgreat123@company.com",
        correct: "d",
    },
    {
        question: "18. You have a family member who would like to use your work computer to send an email using a personal email, what would you do?",
        a: "Allow since the person is a family member.",
        b: "Not allow. Work computer is for work purposes only.",
       
        correct: "b",
    },
    {
        question: "19. A member of your family is a student and would like to borrow your work computer for online class and the class does not conflict with your work schedule. What would you do?",
        a: "Allow. Create a different user on your Windows computer for online class.",
        b: "Not allow. Work computer is for work purposes only.",
        
        correct: "b",
    },
    {
        question: "20.  You are hired by a company and you were issued with a laptop for Work From Home scenario. After a week, you decided to discontinue working for the company to join a different company. What will you do with the issued laptop?",
        a: "Take it as part of your 1 week services.",
        b: "Request for the laptop to be given to you.",
        c: "Return the laptop to the company.",
        d: "Request to buy the laptop from the company.",
        e: "All of the above.",
        correct: "c",
    },
 

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
    
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})