export const showMsg = (type, message) => {
    ElMessage({
      showClose: true,
      message,
      type,
      duration: 2000,
    });
  };