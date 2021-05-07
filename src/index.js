const initLoad = (function(){
  const content = document.querySelector('#content')

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
    firstLi.setAttribute('class', 'navItem')
    firstLi.textContent = 'Home'

    const secondLi = document.createElement('li')
    secondLi.setAttribute('class', 'navItem')
    secondLi.textContent = 'Menu'

    const thirdLi = document.createElement('li')
    thirdLi.setAttribute('class', 'navItem')
    thirdLi.textContent = 'Contact us'

    content.appendChild(nav)

    nav.appendChild(navLogo)
    nav.appendChild(navListContainer)

    navLogo.appendChild(header)
    header.appendChild(span)

    navListContainer.appendChild(navList)

    navList.appendChild(firstLi)
    navList.appendChild(secondLi)
    navList.appendChild(thirdLi)
  }

  return { loadNav }
})()

initLoad.loadNav()