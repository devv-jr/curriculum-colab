import './style.css'

console.log('Página "Proyectos" cargada')

// Interactividad para las tarjetas de proyectos
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card')
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px) scale(1.02)'
    })
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)'
    })
  })
})