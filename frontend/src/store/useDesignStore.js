import { create } from 'zustand';
import api from '../lib/axios';
import toast from 'react-hot-toast';

export const useDesignStore = create((set) => ({
    designs: [],
    loading: true,

    fetchDesigns: async () => {
        try {
            set({ loading: true });
            const res = await api.get("/designs");
            console.log(res.data)
            set({ designs: res.data });
        } catch (error) {
            set({ designs: [] });
            console.log("Error fetching designs");
            console.log(error.response);
            toast.error(error.response.data.message || "Something went wrong");
        } finally {
            set({ loading: false });
        }
    },

    handleDelete: async (e, id) => {
        e.preventDefault();

        if (!window.confirm("Are you sure you want to delte this design?")) return

        try {
            await api.delete(`/designs/${id}`)
            set((state) => ({
                designs: state.designs.filter((design) => design._id !== id)
            }));
            toast.success("Design deleted successfully")
        } catch (error) {
            console.log("Error in deleling design", error)
            toast.error(error.response.data.message || "Failed to delete design")
        }
    },
}));