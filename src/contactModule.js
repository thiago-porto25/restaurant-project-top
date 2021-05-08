const contactLoad = (function() {
  const content = document.querySelector('#content')

  const load = () => {
    const contactBody = document.createElement('div')
    contactBody.setAttribute('id', 'contactBody')

    const headerContainer = document.createElement('div')
    headerContainer.setAttribute('class', 'headerContainer')

    const h1 = document.createElement('h1')
    h1.textContent = 'Contact us'

    const templateContainer = document.createElement('div')
    templateContainer.setAttribute('class', 'templateContainer')

    //create elements from information section of page
    const information = document.createElement('div')
    information.setAttribute('id', 'information')

    const contactInfo1 = document.createElement('div')
    contactInfo1.setAttribute('class', 'contactInfo')
    const p1 = document.createElement('p')
    p1.textContent = ' Pain Gaming Street, 123 - Flamengo, Rio de Janeiro - RJ, Brazil'
    const i1 = document.createElement('i')
    i1.setAttribute('class', 'fas fa-map-marker-alt')

    const contactInfo2 = document.createElement('div')
    contactInfo2.setAttribute('class', 'contactInfo')
    const p2 = document.createElement('p')
    p2.textContent = ' +55 22 99999-9999'
    const i2 = document.createElement('i')
    i2.setAttribute('class', 'fas fa-phone-alt')

    const contactInfo3 = document.createElement('div')
    contactInfo3.setAttribute('class', 'contactInfo')
    const p3 = document.createElement('p')
    p3.textContent = ' Open every day: 8am to 8pm'
    const i3 = document.createElement('i')
    i3.setAttribute('class', 'fas fa-clock')

    //create elements from google Maps embed
    const googleMaps = document.createElement('div')
    googleMaps.setAttribute('id', 'googleMaps')

    const iframe = document.createElement('iframe')
    iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470399.28070920164!2d-43.7279885349577!3d-22.91357811401604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997efe4224b50b%3A0xf988253c846c59ee!2sRio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1620138741887!5m2!1spt-BR!2sbr')
    iframe.setAttribute('allowfullscreen', '')
    iframe.setAttribute('loading', 'lazy')

    //create elements from the contact form
    const contactForm = document.createElement('form')
    contactForm.setAttribute('id', 'contactForm')

    const contactTitle = document.createElement('header')
    contactTitle.setAttribute('class', 'contactTitle')
    contactTitle.textContent = 'Send us a message'

    const inputContainer1 = document.createElement('div')
    inputContainer1.setAttribute('class', 'inputContainer')
    const input1 = document.createElement('input')
    input1.setAttribute('id', 'fullName')
    input1.setAttribute('class', 'inputForm')
    input1.setAttribute('required')
    input1.setAttribute('type', 'text')
    const span1 = document.createElement('span')
    span1.setAttribute('class', 'floatingLabel')
    span1.textContent = 'Full Name'

    const inputContainer2 = document.createElement('div')
    inputContainer2.setAttribute('class', 'inputContainer')
    const input2 = document.createElement('input')
    input2.setAttribute('id', 'Email')
    input2.setAttribute('class', 'inputForm')
    input2.setAttribute('required')
    input2.setAttribute('type', 'email')
    const span2 = document.createElement('span')
    span2.setAttribute('class', 'floatingLabel')
    span2.textContent = 'Email'

    const inputContainer3 = document.createElement('div')
    inputContainer3.setAttribute('class', 'inputContainer')
    const textarea = document.createElement('textarea')
    textarea.setAttribute('id', 'message')
    textarea.setAttribute('class', 'inputForm')
    textarea.setAttribute('required')
    const span3 = document.createElement('span')
    span3.setAttribute('class', 'floatingLabel')
    span3.textContent = 'Type your message...'

    const contactButton = document.createElement('button')
    contactButton.setAttribute('id', 'contactButton')
    contactButton.setAttribute('class', 'button')

    //append all elements
    content.appendChild(contactBody)

    contactBody.appendChild(headerContainer)
    headerContainer.appendChild(h1)

    contactBody.appendChild(templateContainer)
    templateContainer.appendChild(information)

    information.appendChild(contactInfo1)
    contactInfo1.appendChild(p1)
    p1.prepend(i1)
    information.appendChild(contactInfo2)
    contactInfo2.appendChild(p2)
    p2.prepend(i2)
    information.appendChild(contactInfo3)
    contactInfo3.appendChild(p3)
    p3.prepend(i3)

    templateContainer.appendChild(googleMaps)
    googleMaps.appendChild(iframe)

    templateContainer.appendChild(contactForm)
    contactForm.appendChild(contactTitle)

    contactForm.appendChild(inputContainer1)
    inputContainer1.appendChild(input1)
    inputContainer1.appendChild(span1)
    contactForm.appendChild(inputContainer2)
    inputContainer2.appendChild(input2)
    inputContainer2.appendChild(span2)
    contactForm.appendChild(inputContainer3)
    inputContainer3.appendChild(textarea)
    inputContainer3.appendChild(span3)

    contactForm.appendChild(contactButton)
  }


  const unload = () => {
    const contactBody = document.querySelector('#contactBody')
    content.removeChild(contactBody)
  }


  return { load, unload }
})()

export { contactLoad }