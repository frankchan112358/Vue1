<script lang="ts">
export interface GroceryItem {
  id: number;
  text: string;
}

export interface ItemModel {
  message: string;
}

export interface OptionModel {
  value: string | null;
  text: string;
}

export interface User {
  userId: string;
  name: string;
  branchName: string;
  branchCode: string;
  sex: string;
  email: string;
  activated: boolean;
}

export interface EventModel {
  name: string;
  model: string | {};
}

export interface Courses {
  title: string;
  path: string;
}
</script>
