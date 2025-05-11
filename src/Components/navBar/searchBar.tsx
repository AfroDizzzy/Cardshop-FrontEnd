import { useState } from "react";

export function SearchBar() {
    const [searchBarText, setSearchBarText] = useState('');
    const [autoCompleteResults, setAutoCompleteResults] = useState({});
    const [status, setStatus] = useState('typing');


    

    const example = [
        {
            "id": "chandraablaze",
            "image": "43da8995-77da-4ec4-94a5-5e7932a3c969.jpg?1562611728",
            "label": "Chandra Ablaze",
            "url": "/cards/chandra-ablaze"
        },
        {
            "id": "chandranalaar",
            "image": "44108e96-1fb5-41e0-a391-0c111e0f4f11.jpg?1562378236",
            "label": "Chandra Nalaar",
            "url": "/cards/chandra-nalaar"
        },
        {
            "id": "chandrasdefeat",
            "image": "f38c6613-b1f7-4b38-b956-7860d041e593.jpg?1562820094",
            "label": "Chandra's Defeat",
            "url": "/cards/chandras-defeat"
        },
        {
            "id": "chandrasembercat",
            "image": "30f9c266-f32e-4483-9709-f83675331688.jpg?1592516863",
            "label": "Chandra's Embercat",
            "url": "/cards/chandras-embercat"
        },
        {
            "id": "chandrasfiremaw",
            "image": "76cf0b50-155f-4e65-9e48-88b378ad93a1.jpg?1596250195",
            "label": "Chandra's Firemaw",
            "url": "/cards/chandras-firemaw"
        },
        {
            "id": "chandrasflamewave",
            "image": "5f13b6a7-fa62-4d94-a56c-f2e64c8c1666.jpg?1592518162",
            "label": "Chandra's Flame Wave",
            "url": "/cards/chandras-flame-wave"
        },
        {
            "id": "chandrasfury",
            "image": "d2b85237-98a8-4b52-9cc6-6fd14849b069.jpg?1562043495",
            "label": "Chandra's Fury",
            "url": "/cards/chandras-fury"
        },
        {
            "id": "chandrasignition",
            "image": "960f45a3-f9cf-41e6-b813-f3dee620a944.jpg?1698988311",
            "label": "Chandra's Ignition",
            "url": "/cards/chandras-ignition"
        },
        {
            "id": "chandrasincinerator",
            "image": "ed875705-b7b6-4464-b16f-61629ffed04f.jpg?1594736535",
            "label": "Chandra's Incinerator",
            "url": "/cards/chandras-incinerator"
        }
    ]
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(searchBarText);
            setStatus('success');
        } catch (error) {
            setStatus('typing');
            console.error(error)
        }
    }

    function handleTextareaChange(e) {
        setSearchBarText(e.target.value);

    }

    function submitForm(searchBarText: string) {
        // Pretend it's hitting the network.
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                const shouldError = searchBarText.toLowerCase() !== 'lima'
                if (shouldError) {
                    reject(new Error('Good guess but a wrong answer. Try again!'));
                } else {
                    resolve();
                }
            }, 1500);
        });
    }

    function getSearchContent() {
        console.log('click')
    }

    return (
        <>
            <input type="search"
                id="edhrec-searchbar"
                placeholder="Search..."
                autoCapitalize="off"
                typeof="text"
                onChange={handleTextareaChange}
                value={searchBarText}>
            </input>

            <ul className="space-y-2">
                {example.map(card => (
                    <li
                        key={card.id}
                        className="flex items-center p-2 bg-white rounded shadow hover:bg-red-50 transition-colors"
                    >
                        <div className="w-12 h-12 mr-4 bg-gray-200 rounded overflow-hidden">
                            <img
                                src={`/api/placeholder/100/100`}
                                alt={`${card.label} card`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <a
                                href={card.url}
                                className="text-red-700 hover:text-red-900 font-medium"
                            >
                                {card.label}
                            </a>
                            <p className="text-sm text-gray-500">ID: {card.id}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}