const menuLoad = (function() {
  const content = document.querySelector('#content')

  const load = () => {
    const menuBody = document.createElement('div')
    menuBody.setAttribute('id', 'menuBody')

    const menuHeadContainer = document.createElement('div')
    menuHeadContainer.setAttribute('class', 'headerContainer')

    const h1 = document.createElement('h1')
    h1.textContent = 'Menu'

    const menuContainer = document.createElement('div')
    menuContainer.setAttribute('id', 'menuContainer')
    menuContainer.setAttribute('class', 'templateContainer')

    const menuItem1 = document.createElement('div')
    menuItem1.setAttribute('class', 'menuItem')
    const image1 = document.createElement('div')
    image1.setAttribute('id', 'chocolateCake')
    image1.setAttribute('class', 'menuImage')
    const p1 = document.createElement('p')
    p1.textContent = 'Chocolate Cake'
    const sub1 = document.createElement('sub')
    sub1.textContent = 'R$ 6,00 a piece'

    const menuItem2 = document.createElement('div')
    menuItem2.setAttribute('class', 'menuItem')
    const image2 = document.createElement('div')
    image2.setAttribute('id', 'lemonCake')
    image2.setAttribute('class', 'menuImage')
    const p2 = document.createElement('p')
    p2.textContent = 'Lemon Cake'
    const sub2 = document.createElement('sub')
    sub2.textContent = 'R$ 5,00 a piece'

    const menuItem3 = document.createElement('div')
    menuItem3.setAttribute('class', 'menuItem')
    const image3 = document.createElement('div')
    image3.setAttribute('id', 'strawberryCake')
    image3.setAttribute('class', 'menuImage')
    const p3 = document.createElement('p')
    p3.textContent = 'Strawberry Cake'
    const sub3 = document.createElement('sub')
    sub3.textContent = 'R$ 6,00 a piece'

    const menuItem4 = document.createElement('div')
    menuItem4.setAttribute('class', 'menuItem')
    const image4 = document.createElement('div')
    image4.setAttribute('id', 'coconutCake')
    image4.setAttribute('class', 'menuImage')
    const p4 = document.createElement('p')
    p4.textContent = 'Coconut Cake'
    const sub4 = document.createElement('sub')
    sub4.textContent = 'R$ 5,00 a piece'

    const menuItem5 = document.createElement('div')
    menuItem5.setAttribute('class', 'menuItem')
    const image5 = document.createElement('div')
    image5.setAttribute('id', 'peanutCake')
    image5.setAttribute('class', 'menuImage')
    const p5 = document.createElement('p')
    p5.textContent = 'Peanut Cake'
    const sub5 = document.createElement('sub')
    sub5.textContent = 'R$ 5,00 a piece'

    const menuItem6 = document.createElement('div')
    menuItem6.setAttribute('class', 'menuItem')
    const image6 = document.createElement('div')
    image6.setAttribute('id', 'carrotCake')
    image6.setAttribute('class', 'menuImage')
    const p6 = document.createElement('p')
    p6.textContent = 'Brazilian Carrot Cake'
    const sub6 = document.createElement('sub')
    sub6.textContent = 'R$ 4,00 a piece'

    content.appendChild(menuBody)
    menuBody.appendChild(menuHeadContainer)
    menuHeadContainer.appendChild(h1)
    menuBody.appendChild(menuContainer)

    menuContainer.appendChild(menuItem1)
    menuItem1.appendChild(image1)
    menuItem1.appendChild(p1)
    menuItem1.appendChild(sub1)

    menuContainer.appendChild(menuItem2)
    menuItem2.appendChild(image2)
    menuItem2.appendChild(p2)
    menuItem2.appendChild(sub2)

    menuContainer.appendChild(menuItem3)
    menuItem3.appendChild(image3)
    menuItem3.appendChild(p3)
    menuItem3.appendChild(sub3)

    menuContainer.appendChild(menuItem4)
    menuItem4.appendChild(image4)
    menuItem4.appendChild(p4)
    menuItem4.appendChild(sub4)

    menuContainer.appendChild(menuItem5)
    menuItem5.appendChild(image5)
    menuItem5.appendChild(p5)
    menuItem5.appendChild(sub5)

    menuContainer.appendChild(menuItem6)
    menuItem6.appendChild(image6)
    menuItem6.appendChild(p6)
    menuItem6.appendChild(sub6)
  }


  const unload = () => {
    const menuBody = document.querySelector('#menuBody')
    content.removeChild(menuBody)
  }

  
  return { load, unload }
})()

export { menuLoad }