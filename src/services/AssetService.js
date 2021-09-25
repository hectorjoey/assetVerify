import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/assets";

class AssetService {
  getAssets() {
    return axios.get("http://localhost:8080/api/v1/assets");
  }

  createAsset(asset) {
    return axios.post(BASE_URL, asset);
  }

  getAssetById(assetId) {
    return axios.get(BASE_URL + "/" + assetId);
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