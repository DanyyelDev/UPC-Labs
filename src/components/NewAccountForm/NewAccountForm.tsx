export const NewAccountForm = () => {
    return (
      <div className="container mx-auto flex flex-col justify-center items-center h-max mt-20">
        <h1 className="text-center font-bold p-4">Register</h1>
        <div className="container sm-4 flex flex-col w-2/4 p-4">
          <label className="input input-bordered flex items-center gap-2">
            Name:
            <input type="email" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email:
            <input type="email" className="grow" placeholder="daisy@site.com" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Password:
            <input type="password" className="grow" placeholder="*********" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Confirm password:
            <input type="password" className="grow" placeholder="*********" />
          </label>
          <div className="flex justify-center p-4">
              <button className="btn w-2/4">Completar registro</button>
          </div>
        </div>
      </div>
    );
  };
  