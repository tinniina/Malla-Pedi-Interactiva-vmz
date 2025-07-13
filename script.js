document.addEventListener('DOMContentLoaded', () => {
  const ramos = document.querySelectorAll('.ramo');

  ramos.forEach(ramo => {
    const requiere = ramo.dataset.requiere;

    // Si tiene requisitos, bloquearlo inicialmente
    if (requiere) {
      ramo.classList.add('bloqueado');
      ramo.disabled = true;
    }

    ramo.addEventListener('click', () => {
      if (ramo.classList.contains('bloqueado') || ramo.classList.contains('aprobado')) return;

      // Aprobar ramo
      ramo.classList.add('aprobado');

      // Desbloquear los ramos que lo requieren
      const idAprobado = ramo.dataset.id;
      document.querySelectorAll(`.ramo[data-requiere="${idAprobado}"]`).forEach(dep => {
        dep.classList.remove('bloqueado');
        dep.disabled = false;
      });
    });
  });
});
