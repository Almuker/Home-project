window.addEventListener('scroll', function() { 
    const classesItem = document.querySelectorAll('.classes_item')
    const groupsItem = document.querySelectorAll('.groups_item')
    const testimonialsItem = document.querySelectorAll('.testimonials_items')
    const teacherItem = document.querySelectorAll('.teacher_item')
    const eventItem = document.querySelectorAll('.event_item')
    const inputRow = document.querySelectorAll('.input_row')
    const info = document.querySelectorAll('.info')
    const scrollBtn = document.querySelector('.scroll_div')
    // console.log(scrollY)
    if (this.scrollY > 115) {
        document.querySelector('.under_header').classList.add('active')
    } else {
        document.querySelector('.under_header').classList.remove('active')
    }

    if (this.scrollY > 250) {
        document.querySelector('.welcome_bg').classList.add('active')
        document.querySelector('.welcome_info').classList.add('active')
    }

    if (this.scrollY >= 600) {
        scrollBtn.classList.add('active')
    } else {
        scrollBtn.classList.remove('active')
    }

    if (this.scrollY > 700) {
        document.querySelector('.music_classes').classList.add('active')
    }

    if (this.scrollY > 770) {
        classesItem[0].classList.add('active')
        classesItem[1].classList.add('active')
        classesItem[2].classList.add('active')
    }

    if (this.scrollY > 1080) {
        classesItem[3].classList.add('active')
        classesItem[4].classList.add('active')
        classesItem[5].classList.add('active')
    }

    if (this.scrollY > 1333) {
        document.querySelector('.groups_info').classList.add('active')
    }
    
    if (this.scrollY > 1500) {
        groupsItem[0].classList.add('active')
        groupsItem[1].classList.add('active')
        groupsItem[2].classList.add('active')
        groupsItem[3].classList.add('active')
    }

    if (this.scrollY > 2023) {
        document.querySelector('.info_time').classList.add('active')
        satisfied_students()
        international_awards()
        years_of_experience()
        qualified_teachers()
    }

    if (this.scrollY > 2278) {
        document.querySelector('.testimonials').classList.add('active')
    }

    if (this.scrollY > 2447) {
        testimonialsItem[0].classList.add('active')
        testimonialsItem[1].classList.add('active')
        testimonialsItem[2].classList.add('active')
    }

    if (this.scrollY > 3272) {
        document.querySelector('.our_teachers').classList.add('active')
    }
    

    if (this.scrollY > 3440) {
        teacherItem[0].classList.add('active')
        teacherItem[1].classList.add('active')
        teacherItem[2].classList.add('active')
        teacherItem[3].classList.add('active')
    }

    if (this.scrollY > 3804) {
        document.querySelector('.black_line_text').classList.add('active')
        document.querySelector('.get_start').classList.add('active')
    }

    if (this.scrollY > 3954) {
        document.querySelector('.events').classList.add('active')
    }

    if (this.scrollY > 4175) {
        eventItem[0].classList.add('active')
        eventItem[1].classList.add('active')
    }

    if (this.scrollY > 4632) {
        document.querySelector('.event_button').classList.add('active')
    }

    if (this.scrollY > 4800) {
        document.querySelector('.contact_us').classList.add('active')
    }

    if (this.scrollY > 4950) {
        inputRow[0].classList.add('active')
    }

    if (this.scrollY > 5000) {
        inputRow[1].classList.add('active')
    }

    if (this.scrollY > 5150) {
        document.querySelector('.textarea_div').classList.add('active')
    }

    if (this.scrollY > 5300) {
        document.querySelector('.message').classList.add('active')
        document.querySelector('.messenger').classList.add('active')
    }

    if (this.scrollY > 5500) {
        info[0].classList.add('active')
        info[1].classList.add('active')
        info[2].classList.add('active')
    }
})

function scrollToTop() {
    document.documentElement.scrollTop = 0
}