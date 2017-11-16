export const selectibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};
