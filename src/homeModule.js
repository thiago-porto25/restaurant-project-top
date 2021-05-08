const initLoad = (function(){
  const _content = document.querySelector('#content')

  const loadNav = () => {
    const nav = document.createElement('div')
    nav.setAttribute('id', 'nav')

    const navLogo = document.createElement('div')
    navLogo.setAttribute('id', 'navLogo')
    navLogo.setAttribute('class', 'logo')

    const navListContainer = document.createElement('div')
    navListContainer.setAttribute('id', 'navListContainer')

    const header = document.createElement('header')
    header.textContent = 'Summer '
    const span = document.createElement('span')
    span.textContent = 'Cakes'

    const navList = document.createElement('ul')
    navList.setAttribute('id', 'navList')

    const firstLi = document.createElement('li')
    firstLi.setAttribute('id', 'liHome')
    firstLi.setAttribute('class', 'navItem selected')
    firstLi.textContent = 'Home'

    const secondLi = document.createElement('li')
    secondLi.setAttribute('id', 'liMenu')
    secondLi.setAttribute('class', 'navItem')
    secondLi.textContent = 'Menu'

    const thirdLi = document.createElement('li')
    thirdLi.setAttribute('id', 'liContact')
    thirdLi.setAttribute('class', 'navItem')
    thirdLi.textContent = 'Contact Us'

    _content.appendChild(nav)

    nav.appendChild(navLogo)
    nav.appendChild(navListContainer)

    navLogo.appendChild(header)
    header.appendChild(span)

    navListContainer.appendChild(navList)

    navList.appendChild(firstLi)
    navList.appendChild(secondLi)
    navList.appendChild(thirdLi)
  }


  const loadHome = () => {
    const homeBody = document.createElement('div')
    homeBody.setAttribute('id', 'homeBody')

    const homeContentContainer = document.createElement('div')
    homeContentContainer.setAttribute('id', 'homeContentContainer')

    const h1 = document.createElement('h1')
    h1.textContent = 'Come visit the best bakery in the world!'

    const p = document.createElement('p')
    p.textContent = 'Cakes made with love and care.'

    const br = document.createElement('br')

    const a = document.createElement('a')
    a.setAttribute('href', 'https://github.com/thiago-porto25')

    const button = document.createElement('button')
    button.setAttribute('class', 'button')
    button.setAttribute('id', 'homeButton')
    button.textContent = 'Order Now!'

    _content.appendChild(homeBody)

    homeBody.appendChild(homeContentContainer)

    homeContentContainer.appendChild(h1)
    homeContentContainer.appendChild(p)
    homeContentContainer.appendChild(br)
    homeContentContainer.appendChild(a)

    a.appendChild(button)
  }


  const unloadHome = () => {
    const homeBody = document.querySelector('#homeBody')
    _content.removeChild(homeBody)
  }

  return { loadNav, loadHome, unloadHome }
})()

export {initLoad}