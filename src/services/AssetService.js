import axios from "axios";

const BASE_URL = "https://asset-verify.herokuapp.com/api/v1/assets";


export const GetAssets = async () => {
  try {
    const { data } = await axios.get(BASE_URL)
    return data
  } catch (error) {
    return error.message
  }
}

export const CreateAssets = async (asset) => {
  console.log(asset)
  try {
    const data = await axios.post(BASE_URL, asset)
    return data
  } catch (error) {
    return error.message
  }
}


class AssetService {
  getAssets() {
    return axios.get("https://asset-verify.herokuapp.com/api/v1/assets");
  }

  createAsset(asset) {
    return axios.post(BASE_URL, asset);
  }

  getAssetById(assetId) {
    return axios.get(BASE_URL + "/" + assetId);
  }

  getAssetByLocation(location) {
    return axios.get(BASE_URL + "/" + location);

  }
  updateAsset(asset, assetId) {
    return axios.put(BASE_URL + "/" + assetId, asset);
  }
  updateAssets(asset, assetId) {
    return axios.patch(BASE_URL + "/" + assetId, asset);
  }

  deleteAsset(assetId) {
    return axios.delete(BASE_URL + "/" + assetId);
  }
}
export default new AssetService();