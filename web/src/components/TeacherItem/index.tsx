import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/65132614?s=460&u=34d825bcf867e99bd1f59343add25a86d6288832&v=4" alt="Toledo" />
                <div>
                    <strong>Toledo</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Sla mano preguiça de escrever
                        <br /><br />
                        Sla sla sla sla sla
            </p>
            <footer>
                <p>
                    Preço/hora
                        <strong>R$ 7,77</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;