import { create } from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),

    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success:false, message:"Please fill in all fields."}
        }
        const res = await fetch("/api/products", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json()
        set((state) => ({
            products: [...state.products, data.data]
        }));
        return { success:true, message:"Product created successfully" }
    },
}));
// This store can be used to manage the product state in your application.
// You can import this store in your components and use it to get or set products.