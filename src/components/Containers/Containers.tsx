import Countries from '../Countries/Countries.tsx';
import CountryInfo from '../CountryInfo/CountryInfo.tsx';

const Containers = () => {
  return (
    <div className="row border border-3">
      <div className="overflow-auto col-4" style={{maxHeight: '600px'}}>
        <Countries/>
      </div>
      <div className="col">
        <CountryInfo/>
      </div>
    </div>
  );
};

export default Containers;