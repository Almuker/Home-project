function international_awards() {
    $('#count_1').animate({
        counter: 12
    }, {
        duration: 3000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        },
        complete: international_awards
    });
};

function satisfied_students() {
    $('#count_2').animate({
        counter: 238
    }, {
        duration: 6000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        },
        complete: satisfied_students
    });
};

function years_of_experience() {
    $('#count_3').animate({
        counter: 19
    }, {
        duration: 3000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        },
        complete: years_of_experience
    });
};

function qualified_teachers() {
    $('#count_4').animate({
        counter: 54
    }, {
        duration: 6000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        },
        complete: qualified_teachers
    });
};