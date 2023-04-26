import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetdrawings.com%2Ffree-icon%2Fgeneric-avatar-icon-51.png&f=1&nofb=1&ipt=6f59022196eea412db4494266993f955ffd093efcbe53d03ff5fa13357330556&ipo=images"
          alt="Teacher"
        />
        <div>
          <strong>Professor 1</strong>
          <span>Disciplina A</span>
        </div>
      </header>
      <p>
        Entusiasta de tecnologias da web
        <br />
        ReactJS and Laravel Expert Developer
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
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
