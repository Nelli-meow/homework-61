import Countries from '../Countries/Countries.tsx';

const Containers = () => {
  return (
    <div className="d-flex flex-row align-items-center border p-3">
      <div className="overflow-auto" style={{maxHeight: '600px'}}>
        <Countries/>
      </div>
    </div>
  );
};

export default Containers;