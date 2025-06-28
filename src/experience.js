import './style.css'

console.log('Página "Experiencia" cargada')

// Animación para la timeline
document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline-item')
  
  timelineItems.forEach((item, index) => {
    item.style.opacity = '0'
    item.style.transform = 'translateX(-50px)'
    
    setTimeout(() => {
      item.style.transition = 'all 0.6s ease'
      item.style.opacity = '1'
      item.style.transform = 'translateX(0)'
    }, index * 200)
  })
})