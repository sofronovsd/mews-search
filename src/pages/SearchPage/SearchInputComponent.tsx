import React, {ChangeEvent, useState} from "react";
import SearchIcon from "../../components/SearchIcon";
import SearchInput from "../../components/SearchInput";
import SearchWrapper from "../../components/SearchWrapper";

interface ISearchInput {
    setSearchString(searchString: string): void
}

const SearchInputComponent: React.FC<ISearchInput> = ({setSearchString}) => {
    const [value, setValue] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(0);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        const timeoutId = window.setTimeout(() => {
            setSearchString(value);
        }, 1000);
        setSearchTimeout(timeoutId);
    };

    return (
        <SearchWrapper>
            <SearchIcon />
            <SearchInput onChange={onChange} value={value} placeholder="Search..."/>
        </SearchWrapper>
    )
};

export default SearchInputComponent;
