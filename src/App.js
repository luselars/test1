import logo from './logo.svg';
import './App.css';

function Header () {
    return <h1>Lars Olsnes Østmo-Sæter</h1>
}

function Image(props){

}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Content coming soon.
        </p>

      </header>

      <body className="App-body">
        <p>
            <Header>

            </Header>
            <p>Saker og ting</p>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEMsNKmCndRuA/profile-displayphoto-shrink_800_800/0/1624297069217?e=1629936000&v=beta&t=5yEqG0kzQqlORR1kDbiyEAYna9hFAI6cuToDcqiNLYc" height="150" width="150"/>
            <p>Mail: larsoestmo@gmail.com
                <br/><br/>
                LinkedIn: www.linkedin.com/in/lars-olsnes-østmo-sæter
                <br/><br/>
                F.Dato: 10.10.1999</p>
                <br/>
        </p>
        <p>
            <h2>Utdanning:</h2>

            2018 – 2021	Bachelor i ingeniørfag: Dataingeniør
            studieretning: systemutvikling
<br/>
            Tittel på Bacheloroppgave: Penetration testing from a software engineering perspective

            <h2>Ferdigheter:</h2>

            <h3>Programmering:</h3>
            har brukt Java, C#, Javascript, C++, Python (og Matlab for den sags skyld). Er nok mest komfortabel med te tre første.
<br/>
            Kan også MySQL, både å konstruere og sette opp databaser, samt å koble sammen med webserver.
<br/>
            Har jobbet med React og express servere gjennom node.js i sammenheng med webutvikling. Dette er nok det jeg har mest erfaring med selv om på react delen er jeg ikke spesielt flink på frontend design.
<br/>
            <h3>Andre ferdigheter:</h3>
            Når jeg programmerer jobber jeg først og fremst på linux operativsystem. Jeg har litt erfaring med docker, og jeg har grei erfaring med virtual box. Jeg kan også scripte i unix-liknende-operativsystem, altså lage shell script, men kan ikke dette på Windows.
<br/>
            Har tatt spesialiserende fag om sikkerhet i nettverk og programvare og skrev også bachelor oppgave om dette.
<br/>
            <h3>Språk:</h3>

            Norsk – Morsmål – flytende skriftlig og muntlig.
<br/>            Engelsk – andrespråk – flytende skriftlig og muntlig.

            <h2>Tidligere arbeidsplasser:</h2>

            Ingen tidligere jobber er relevant for utdanningen min, men jeg kan svare på eventuelle spørsmål om tidligere arbeidsplasser på mail eller telefon hvis det er ønskelig. Jeg har tidligere jobbet ved BILTEMA en sommer og før det på Zachariasbryggen i Bergen i en del helger.
            <br/>
        </p>




      </body>

      <footer className="App-footer">
          Footer
          <Header/>
      </footer>
    </div>
  );
}

export default App;
