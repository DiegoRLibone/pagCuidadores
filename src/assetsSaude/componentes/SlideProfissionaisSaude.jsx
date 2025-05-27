import { useState, useEffect } from 'react';
import Styles from '../css/SlideProfissionaisSaude.module.css';
import iconPsiquiatra from '../images/icon-psiquiatra.png';
import iconPsicologo from '../images/icon-psicologo.png';
import iconPsicopedagogo from '../images/icon-psicopedagogo.png';
import iconFonoaudiologo from '../images/icon-fonoaudiologo.png';
import iconTerapeuta from '../images/icon-terapeuta.png';
import iconFisioterapeuta from '../images/icon-fisioterapeuta.png';
import iconNutricionista from '../images/icon-nutricionista.png';
import iconPediatra from '../images/icon-pediatra.png';
import iconNeurologista from '../images/icon-neurologista.png';

function SlideProfissionaisSaude() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const profissionais = [
    {
      id: 1,
      title: 'Psicólogo',
      icon: iconPsicologo,
      description: 'Ajuda no desenvolvimento emocional, autoestima e enfrentamento de desafios.',
      link: '#psicologo'
    },
    {
      id: 2,
      title: 'Psicopedagogo',
      icon: iconPsicopedagogo,
      description: 'Atua nas dificuldades de aprendizagem, propondo estratégias personalizadas.',
      link: '#psicopedagogo'
    },
    {
      id: 3,
      title: 'Psiquiatra',
      icon: iconPsiquiatra,
      description: 'Cuida da saúde mental, atenção, comportamento e possíveis comorbidades.',
      link: '#psiquiatra'
    },
    {
      id: 4,
      title: 'Fonoaudiólogo',
      icon: iconFonoaudiologo,
      description: 'Trabalha com comunicação, linguagem, fala e processos de deglutição.',
      link: '#fonoaudiologo'
    },
    {
      id: 5,
      title: 'Terapeuta Ocupacional',
      icon: iconTerapeuta,
      description: 'Desenvolve habilidades para atividades do dia a dia e promoção da autonomia.',
      link: '#terapeuta-ocupacional'
    },
    {
      id: 6,
      title: 'Fisioterapeuta',
      icon: iconFisioterapeuta,
      description: 'Atua no desenvolvimento motor, coordenação física e reabilitação.',
      link: '#fisioterapeuta'
    },
    {
      id: 7,
      title: 'Nutricionista',
      icon: iconNutricionista,
      description: 'Cuida da alimentação e nutrição adequada para o desenvolvimento saudável.',
      link: '#nutricionista'
    },
    {
      id: 8,
      title: 'Pediatra',
      icon: iconPediatra,
      description: 'Acompanha o desenvolvimento geral e cuida da saúde física da criança.',
      link: '#pediatra'
    },
    {
      id: 9,
      title: 'Neurologista',
      icon: iconNeurologista,
      description: 'Especialista em sistema nervoso e acompanhamento do desenvolvimento neurológico.',
      link: '#neurologista'
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(profissionais.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return profissionais.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className={Styles.saudeContainer}>
      <div className={Styles.saudeContent}>
        <h2 className={Styles.saudeTitle}>Nossa equipe multidisciplinar</h2>
        
        <div className={Styles.saudeSlider}>
          <button 
            className={Styles.saudeNavButton} 
            onClick={prevSlide}
            aria-label="Slide anterior"
          >
            &#8249;
          </button>

          <div className={Styles.saudeCards}>
            {getCurrentSlideItems().map((profissional) => (
              <div key={profissional.id} className={Styles.saudeCard}>
                <div className={Styles.saudeIconContainer}>
                  <img 
                    src={profissional.icon} 
                    alt={`Ícone ${profissional.title}`}
                    className={Styles.saudeIcon}
                  />
                </div>
                <h3 className={Styles.saudeCardTitle}>{profissional.title}</h3>
                <p className={Styles.saudeCardDescription}>
                  {profissional.description}
                </p>
                <a href={profissional.link} className={Styles.saudeCardButton}>
                  VEJA A LISTA COMPLETA
                </a>
              </div>
            ))}
          </div>

          <button 
            className={Styles.saudeNavButton} 
            onClick={nextSlide}
            aria-label="Próximo slide"
          >
            &#8250;
          </button>
        </div>

        <div className={Styles.saudeDots}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`${Styles.saudeDot} ${index === currentSlide ? Styles.saudeDotActive : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SlideProfissionaisSaude;