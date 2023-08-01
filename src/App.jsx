
import './App.css'
import Aside from './components/Aside'
import Input from './components/Input'

function App() {
  return (
    <div className='App'>
      <div id="App">
        <main id='main'>
          <h1 className='main__title'>Inputs</h1>
          <section id='inputs'>
            <article className='inputs__row'>
              <div className='inputs__item'>
                <p className='inputs__desc'>{ "<Input />" }</p>
                <Input placeholder="Placeholder" label="Label-1" />
              </div>
              <div className='inputs__item'>
                <p className='inputs__desc hover'>{ "&:hover" }</p>
                <Input placeholder="Placeholder" label="Label-2" />
              </div>
              <div className='inputs__item'>
                <p className='inputs__desc hover'>{ "&:focus" }</p>
                <Input placeholder="Placeholder" label="Label-3" />
              </div>
            </article>
            <article className='inputs__row'>
              <div className='inputs__item'>
                <p className='inputs__desc'>{ "<Input error />" }</p>
                <Input placeholder="Placeholder" label="Label-1" error />
              </div>
              <div className='inputs__item'>
                <p className='inputs__desc hover'>{ "&:hover" }</p>
                <Input placeholder="Placeholder" label="Label-2" error />
              </div>
              <div className='inputs__item'>
                <p className='inputs__desc hover'>{ "&:focus" }</p>
                <Input placeholder="Placeholder" label="Label-3" error />
              </div>
            </article>
            <article className='inputs__row'>
              <div className='inputs__item'>
                <p className='inputs__desc'>{ "<Input disabled />" }</p>
                <Input placeholder="Placeholder" label="Label-1" disabled />
              </div>
            </article>
            <article className='inputs__row'>
              <div className='inputs__item'>
                <p className='inputs__desc'>{ '<Input helperText="Some interesting text" />' }</p>
                <Input placeholder="Placeholder" label="Label-1" helperText="Some interesting text"/>
              </div>
              <div className='inputs__item'>
                <p className='inputs__desc'>{ '<Input helperText="Some interesting text" error />' }</p>
                <Input placeholder="Placeholder" label="Label-2" helperText="Some interesting text" error />
              </div>
            </article>
            <article className='inputs__row'>
              <div className='inputs__item'>
                <p className='inputs__desc'>{ '<Input startIcon />' }</p>
                <Input placeholder="Placeholder" label="Label-1" startIcon="call" />
              </div>
              <div className='inputs__item'>
                <p className='inputs__desc'>{ '<Input endIcon />' }</p>
                <Input placeholder="Placeholder" label="Label-2" endIcon="lock" />
              </div>
            </article>
            <article className='inputs__row'>
              <div className='inputs__item'>
                <p className='inputs__desc'>{ '<Input value="text" />' }</p>
                <Input placeholder="Placeholder" label="Label" value="Text" />
              </div>
            </article>
            <article className='inputs__row'>
              <div className='inputs__item'>
                <p className='inputs__desc'>{ '<Input size="sm" />' }</p>
                <Input placeholder="Placeholder" label="Label-1" size="sm" />
              </div>
              <div className='inputs__item'>
                <p className='inputs__desc'>{ '<Input size="md" />' }</p>
                <Input placeholder="Placeholder" label="Label-2" size="md" />
              </div>
            </article>
            <article className='inputs__row'>
              <div className='inputs__item'>
                <p className='inputs__desc'>{ '<Input fullWidth />' }</p>
                <Input placeholder="Placeholder" label="Label" fullWidth />
              </div>
            </article>
            <article className='inputs__row'>
              <div className='inputs__item'>
                <p className='inputs__desc'>{ '<Input multiline row="6" />' }</p>
                <Input placeholder="Placeholder" label="Label" multiline row="6" />
              </div>
            </article>
          </section>
        </main>
        <Aside />
      </div>
      <p className="footer">
        created by  
          <span className="username">
            <a href="https://devchallenges.io/portfolio/Anselmo1122" target="_blank">
              Anselmo1122
            </a>
          </span>
          - devChallenges.io
      </p>
    </div>
  )
}

export default App
