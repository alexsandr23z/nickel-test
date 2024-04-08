import { ProductType } from "../../const";

type THeadersProps = {
  idFilter: string;
  setIdFilter: (arg: string) => void;
  nameFilter: string;
  setNameFilter: (arg: string) => void;
  materialFilter: ProductType;
  setMaterialFilter: (arg: ProductType) => void;
};

function Header({idFilter, setIdFilter, nameFilter, setNameFilter, materialFilter, setMaterialFilter}: THeadersProps) {
    
  return (
    <div className="header">
      <div className="form-search">
        <form>
          <label>
            <input
              className="form-search__input-text"
              type="text"
              autoComplete="off"
              name="form-search__input-text"
              placeholder="Фильтр по названию"
              value={nameFilter}
              onChange={e => setNameFilter(e.target.value)}
            />
          </label>
          <label>
            <input
              className="form-search__input-number"
              type="number"
              autoComplete="off"
              name="form-search__input-number"
              placeholder="Фильтр по ID"
              value={idFilter}
              onChange={e => setIdFilter(e.target.value)}
            />
          </label>
          <select 
            className="form-search__select"
            name="type"
            value={materialFilter}
            onChange={e => setMaterialFilter(e.target.value as ProductType)}
          >
            <option value={ProductType.all}>{ProductType.all}</option>
            <option value={ProductType.iron}>{ProductType.iron}</option>
            <option value={ProductType.tree}>{ProductType.tree}</option>
            <option value={ProductType.plastic}>{ProductType.plastic}</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default Header;
