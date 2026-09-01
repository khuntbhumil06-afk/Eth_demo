import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SidebarFilters = ({
    selectedSort,
    setSelectedSort,
    selectedBrands,
    handleBrandChange,
    maxPrice,
    setMaxPrice,
    selectedOffer,
    setSelectedOffer,
}) => {
    const [isBrandOpen, setIsBrandOpen] = useState(true);
    const [isOfferOpen, setIsOfferOpen] = useState(true);

    const brandsList = ["Amore", "Noi", "Nutri One", "Sun Gift", "Yogi"];
    const offersList = [
        { label: "00% - 20%", value: "0-20" },
        { label: "20% - 40%", value: "20-40" },
        { label: "40% - 60%", value: "40-60" },
    ];
    const sortOptions = [
        { key: "lowToHigh", label: "Price low to high" },
        { key: "highToLow", label: "Price high to low" },
        { key: "bestSellers", label: "Best Sellers" },
        { key: "aToZ", label: "A to Z" },
        { key: "zToA", label: "Z to A" },
    ];

    return (
        <aside className="prod-sidebar">
            <div className="prod-group">
                <h3 className="prod-title">Sort By</h3>
                {sortOptions.map((option) => (
                    <label key={option.key} className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={selectedSort === option.key}
                            onChange={() => setSelectedSort(selectedSort === option.key ? "" : option.key)}
                        />
                        {" "}{option.label}
                    </label>
                ))}
            </div>

            <div className="filter-divider"></div>

            <h2 className="prod-heading">Filters</h2>

            <div className="prod-group">
                <div className="prod-header" onClick={() => setIsBrandOpen(!isBrandOpen)}>
                    <span>Brands</span>
                    {isBrandOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {isBrandOpen && (
                    <div className="prod-content">
                        {brandsList.map((brand) => (
                            <label key={brand} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => handleBrandChange(brand)}
                                />
                                {" "}{brand}
                            </label>
                        ))}
                    </div>
                )}
            </div>

            <div className="prod-group">
                <h3 className="prod-title">Price Range</h3>
                <input
                    type="range"
                    min="1"
                    max="1500"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="prod-slider"
                />
                <div className="prod-range-values">
                    <span>01</span>
                    <span>{maxPrice}</span>
                </div>
            </div>

            <div className="prod-group">
                <div className="prod-header" onClick={() => setIsOfferOpen(!isOfferOpen)}>
                    <span>Offers</span>
                    {isOfferOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {isOfferOpen && (
                    <div className="prod-content">
                        {offersList.map((offer) => (
                            <label key={offer.value} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={selectedOffer === offer.value}
                                    onChange={() => setSelectedOffer(selectedOffer === offer.value ? "" : offer.value)}
                                />
                                {" "}{offer.label}
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </aside>
    );
};

export default SidebarFilters;