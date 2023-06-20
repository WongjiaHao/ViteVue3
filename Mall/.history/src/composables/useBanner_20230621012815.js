

onMounted(async () => {
    const res = await getBannerbyid({ distributionSite: '2' })
    // console.log(res);
    bannerList.value = res.result
  })