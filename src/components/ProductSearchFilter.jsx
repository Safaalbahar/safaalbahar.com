
import React from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';

const ProductSearchFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  brandFilter, 
  setBrandFilter, 
  originFilter, 
  setOriginFilter, 
  brands = [], 
  origins = [] 
}) => {
  const handleClearFilters = () => {
    setSearchTerm('');
    setBrandFilter('all');
    setOriginFilter('all');
  };

  const hasActiveFilters = searchTerm !== '' || brandFilter !== 'all' || originFilter !== 'all';

  return (
    <div className="bg-card text-card-foreground p-5 md:p-6 rounded-2xl shadow-sm border border-border mb-8 transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))/10] flex items-center justify-center">
            <Filter className="w-5 h-5 text-[hsl(var(--primary))]" />
          </div>
          <h3 className="font-bold text-lg">Filter & Search</h3>
        </div>
        
        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-destructive transition-colors px-3 py-1.5 rounded-md hover:bg-destructive/10"
          >
            <X className="w-4 h-4" />
            Clear Filters
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search Input */}
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-[hsl(var(--primary))] transition-colors" />
          <input 
            type="text" 
            placeholder="Search products by name..." 
            className="w-full h-11 pl-10 pr-4 bg-background text-foreground border border-input rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/30] focus:border-[hsl(var(--primary))]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Brand Filter */}
        <div className="relative group">
          <select 
            value={brandFilter} 
            onChange={(e) => setBrandFilter(e.target.value)}
            className="w-full h-11 pl-4 pr-10 appearance-none bg-background text-foreground border border-input rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/30] focus:border-[hsl(var(--primary))] cursor-pointer"
          >
            <option value="all">All Brands</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none group-hover:text-foreground transition-colors" />
        </div>
        
        {/* Origin Filter */}
        <div className="relative group">
          <select 
            value={originFilter} 
            onChange={(e) => setOriginFilter(e.target.value)}
            className="w-full h-11 pl-4 pr-10 appearance-none bg-background text-foreground border border-input rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/30] focus:border-[hsl(var(--primary))] cursor-pointer"
          >
            <option value="all">All Origins</option>
            {origins.map(origin => (
              <option key={origin} value={origin}>{origin}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none group-hover:text-foreground transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default ProductSearchFilter;
