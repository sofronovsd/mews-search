import React, {ChangeEvent, useState} from "react";
import SearchIcon from "../../components/SearchIcon";
import SearchInput from "../../components/SearchInput";
import SearchWrapper from "../../components/SearchWrapper";

interface ISearchInput {
    setSearchString(searchString: string): void
}

const SearchInputComponent: React.FC<ISearchInput> = ({setSearchString}) => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' ) {
            setSearchString(value);
        }
    };

    return (
        <SearchWrapper>
            <SearchIcon />
            <SearchInput onKeyPress={onKeyPress} onChange={onChange} value={value} placeholder="Search..."/>
        </SearchWrapper>
    )
};

export default SearchInputComponent;
