document.querySelector("button[type='submit']").addEventListener("click", function(event) {
    event.preventDefault(); // لمنع تحديث الصفحة

    let score = 0;
    
    // تصفير الألوان قبل التقييم
    for (let i = 1; i <= 61; i++) {
        let answers = document.querySelectorAll(`input[name="ahmed ${i}"]`);
        answers.forEach(answer => {
            let label = answer.nextElementSibling;
            if (label) label.style.color = "black"; // إعادة تعيين اللون إلى الافتراضي
        });
    }

    // حساب الإجابات الصحيحة وتلوين الإجابات
    for (let i = 1; i <= 61; i++) {
        let selectedAnswer = document.querySelector(`input[name="ahmed ${i}"]:checked`);
        let correctAnswer = document.querySelector(`input[name="ahmed ${i}"][value='1']`);
        
        if (selectedAnswer) {
            let selectedLabel = selectedAnswer.closest("label"); // يضمن التعامل مع الـ label
            if (selectedAnswer.value === "1") {
                score++;
                if (selectedLabel) selectedLabel.style.color = "green"; // أخضر للإجابة الصحيحة المختارة
            } else {
                if (selectedLabel) selectedLabel.style.color = "red"; // أحمر للإجابة الخاطئة المختارة
                if (correctAnswer) {
                    let correctLabel = correctAnswer.closest("label");
                    if (correctLabel) correctLabel.style.color = "green"; // أخضر للإجابة الصحيحة الفعلية
                }
            }
        }
    }
    

    // تحديد التقدير
    let grade;
    if (score === 0) {
        grade = "F (راسب)";
    } else if (score > 0 && score < 10) {
        grade = "F (راسب)";
    } else if (score >= 10 && score < 20) {
        grade = "D (مقبول)";
    } else if (score >= 20 && score < 30) {
        grade = "C (جيد)";
    } else if (score >= 30 && score < 40) {
        grade = "B (جيد جدًا)";
    } else if (score >= 40 && score < 50) {
        grade = "A (امتياز)";
    } else if (score >= 50 && score <= 61) {
        grade = "+A (امتياز مرتفع)";
    }

    // عرض النتيجة في رسالة تنبيه
    alert(`عدد الإجابات الصحيحة: ${score}\nالتقدير: ${grade}
        
        
        `);
});
