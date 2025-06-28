import './style.css'

console.log('Página "Sobre mí" cargada')

// Animación de entrada suave
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.content-section')
  sections.forEach(section => {
    section.style.opacity = '0'
    section.style.transform = 'translateY(20px)'
    
    setTimeout(() => {
      section.style.transition = 'all 0.6s ease'
      section.style.opacity = '1'
      section.style.transform = 'translateY(0)'
    }, 100)
  })
})