import React from 'react';
import Header from '../components/Header';

export default function About() {
  return (
    <div className="bg-custom-purple">
      <Header />
      <main className="min-h-screen flex justify-center items-center  p-10">
        <div className="max-w-screen-sm mx-auto">
          <p className="mb-10">
            Esse projeto foi desenvolvido para tentar ajudar a minha namorada a
            aprender a minha língua e com isso poder ter contato com o melhor
            que há do meu país: o seu povo.
            <br />
            <i className="mt-2">
              This project was developed to try to help my girlfriend learn my
              language and with that be able to have contact with the best of my
              country: our people.
            </i>
          </p>
          <p className="mb-10">
            Espero que através desse eu possa ajudar não só ela mas como você
            também que quer aprender o português e ter uma experiência única ao
            visitar o Brasil.
            <br />
            <i className="mt-2">
              I hope that through this I can help not only her but also you, who
              wants to learn Portuguese and have a unique experience when
              visiting Brazil.
            </i>
          </p>
          <p className="mb-10">
            A ideia desse projeto é ser colaborativo e para qualquer sugestão,
            crítica ou opinião sinta-se mais que livre para me{' '}
            <a href="emailto:vini.avena@poli.ufrj.br" className="underline">
              contactar
            </a>{' '}
            e poder contribuir com esse projeto e ajudar a mais gente a aprender
            a nossa língua.
            <br />
            <i className="mt-2">
              The idea of this project is to be collaborative, and for any
              suggestions, criticism, or opinions, please feel more than free to{' '}
              <a href="emailto:vini.avena@poli.ufrj.br" className="underline">
                contact me
              </a>{' '}
              and contribute to this project, helping more people learn our
              language.
            </i>
          </p>
          <p>
            Com amor,
            <br />
            Vinicius
          </p>
        </div>
      </main>
    </div>
  );
}
