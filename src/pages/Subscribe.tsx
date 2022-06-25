import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CREATE_SUBSCRIPTION_MUTATION = gql`
  mutation CreateSubscriber ($name: String!, $email: String!) {
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}
`;

export function Subscribe() {
  const navigate = useNavigate();

  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");

  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIPTION_MUTATION);

  async function handleSubscriber(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(email, name);

    await createSubscriber({
      variables: {
        name,
        email
      }
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          Logo

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500"> aplicacao completa </strong> do zero, com  <strong className="text-blue-500"> ReactJS </strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Esta aplicacao foi construida com ReactJS e esta sendo desenvolvida como projeto de estudo.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscriber} className="flex flex-col gap-2 w-full">
            <input 
              type="text" 
              className="bg-gray-900 px-5 h-14 rounded" placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <input 
              type="email" 
              className="bg-gray-900 px-5 h-14 rounded" placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <button 
              className="mt-4 bg-green-500  
              py-4 rounded text-sm font-bold hover:bg-green-700 transition-colors uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" alt="Code Mockup" className="mt-10" />
    </div>
  );
}