import './style.css'

console.log('Página "Contacto" cargada')

// Manejo del formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm')
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // Simulación de envío
    const button = form.querySelector('button')
    const originalText = button.textContent
    
    button.textContent = 'Enviando...'
    button.disabled = true
    
    setTimeout(() => {
      button.textContent = '¡Mensaje enviado!'
      form.reset()
      
      setTimeout(() => {
        button.textContent = originalText
        button.disabled = false
      }, 2000)
    }, 1500)
  })
})