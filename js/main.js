const form = document.getElementById('send_application_form');

UIkit.util.on('#contact_us_btn', 'click', function (e) {
    form.reset();
    UIkit.modal("#contact_us").toggle();
});

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('clicked');

    let name = form.elements['name'].value;
    let email = form.elements['email'].value;
    let phone = form.elements['phone'].value;

    let body = `
    <b>Name: </b>${name}
    <br>
    <b>Phone: </b>${email}
    <br>
    <b>Email: </b>${phone}
    <br>
    `

    Email.send({
    SecureToken : "3bcb51ad-68d2-4789-91d1-f0649ffec711",
    To : 'temirlan.zholbolat@gmail.com',
    From : "contact@rauza-pv.kz",
    Subject : "New application",
    Body : body
    }).then(
      UIkit.modal("#application_sent").toggle()
    );
})

