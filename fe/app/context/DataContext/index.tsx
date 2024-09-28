import { useState, useEffect, createContext } from "react";
import { getData, createData, deleteData, updateData } from "@/app/services/data";

export type Data = {
    _id: string;
    data: string;
}

type DataContextType = {
    data: Data[];
    addData: (post: string) => void;
    editData: (id: string, updatedValue: string) => void;
    removeData: (id: string) => void;
    addDataModalOpen: boolean;
    setAddDataModalOpen: (open: boolean) => void;
    dataIsLoading: boolean;
    editDataModalOpen: boolean;
    setEditDataModalOpen: (open: boolean) => void;
    dataToEdit: Data | null;
    setDataToEdit: (data: Data) => void;
}

const initialState: DataContextType = {
    data: [],
    addData: () => { },
    editData: () => { },
    removeData: () => { },
    addDataModalOpen: false,
    setAddDataModalOpen: () => { },
    dataIsLoading: false,
    editDataModalOpen: false,
    setEditDataModalOpen: () => { },
    dataToEdit: { _id: '', data: '' },
    setDataToEdit: () => { },
}

export const DataContext = createContext<DataContextType>(initialState);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [addDataModalOpen, setAddDataModalOpen] = useState<boolean>(false);
    const [editDataModalOpen, setEditDataModalOpen] = useState<boolean>(false);
    const [data, setData] = useState<Data[]>([]);
    const [dataIsLoading, setDataIsLoading] = useState<boolean>(true);
    const [dataToEdit, setDataToEdit] = useState<Data | null>(null);

    const fetchAllData = async () => {
        setDataIsLoading(true);
        const response = await getData();
        setData(response);

        setTimeout(() => {
            setDataIsLoading(false);

            // the illusion of latency to demonstrate the loading state
        }, 500);
    }

    useEffect(() => {
        fetchAllData();
    }, []);

    const addData = async (post: string) => {
        try {
            // add data to the database
            await createData(post);

            // refresh data
            fetchAllData()
        } catch (error) {
            console.error('Error adding data', error);
            // TODO: show error to user
        }
    }

    const editData = async (id: string, updatedValue: string) => {
        try {
            // update data in the database
            await updateData(id, updatedValue);

            // refresh data
            fetchAllData()
        } catch (error) {
            console.error('Error editing data', error);
            // TODO: show error to user
        }
    }

    const removeData = async (id: string) => {
        try {
            // delete data from the database
            await deleteData(id);

            // refresh data
            fetchAllData()
        } catch (error) {
            console.error('Error deleting data', error);
            // TODO: show error to user
        }
    }

    const values = {
        data,
        addData,
        editData,
        removeData,
        addDataModalOpen,
        setAddDataModalOpen,
        dataIsLoading,
        editDataModalOpen,
        setEditDataModalOpen,
        dataToEdit,
        setDataToEdit
    }
    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}
