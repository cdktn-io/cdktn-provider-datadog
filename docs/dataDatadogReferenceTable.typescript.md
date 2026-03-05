# `dataDatadogReferenceTable` Submodule <a name="`dataDatadogReferenceTable` Submodule" id="@cdktn/provider-datadog.dataDatadogReferenceTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogReferenceTable <a name="DataDatadogReferenceTable" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/reference_table datadog_reference_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

new dataDatadogReferenceTable.DataDatadogReferenceTable(scope: Construct, id: string, config: DataDatadogReferenceTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig">DataDatadogReferenceTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig">DataDatadogReferenceTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.putSchema"></a>

```typescript
public putSchema(value: DataDatadogReferenceTableSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetTableName"></a>

```typescript
public resetTableName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogReferenceTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isConstruct"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

dataDatadogReferenceTable.DataDatadogReferenceTable.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformElement"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformDataSource"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogReferenceTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogReferenceTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogReferenceTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/reference_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogReferenceTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fileMetadata">fileMetadata</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference">DataDatadogReferenceTableFileMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.rowCount">rowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference">DataDatadogReferenceTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schemaInput">schemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fileMetadata`<sup>Required</sup> <a name="fileMetadata" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fileMetadata"></a>

```typescript
public readonly fileMetadata: DataDatadogReferenceTableFileMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference">DataDatadogReferenceTableFileMetadataOutputReference</a>

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `rowCount`<sup>Required</sup> <a name="rowCount" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.rowCount"></a>

```typescript
public readonly rowCount: number;
```

- *Type:* number

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schema"></a>

```typescript
public readonly schema: DataDatadogReferenceTableSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference">DataDatadogReferenceTableSchemaOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schemaInput"></a>

```typescript
public readonly schemaInput: IResolvable | DataDatadogReferenceTableSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogReferenceTableConfig <a name="DataDatadogReferenceTableConfig" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

const dataDatadogReferenceTableConfig: dataDatadogReferenceTable.DataDatadogReferenceTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.id">id</a></code> | <code>string</code> | The UUID of the reference table. Either id or table_name must be specified, but not both. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.tableName">tableName</a></code> | <code>string</code> | The name of the reference table. Either id or table_name must be specified, but not both. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The UUID of the reference table. Either id or table_name must be specified, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/reference_table#id DataDatadogReferenceTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.schema"></a>

```typescript
public readonly schema: DataDatadogReferenceTableSchema;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/reference_table#schema DataDatadogReferenceTable#schema}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the reference table. Either id or table_name must be specified, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/reference_table#table_name DataDatadogReferenceTable#table_name}

---

### DataDatadogReferenceTableFileMetadata <a name="DataDatadogReferenceTableFileMetadata" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

const dataDatadogReferenceTableFileMetadata: dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata = { ... }
```


### DataDatadogReferenceTableFileMetadataAccessDetails <a name="DataDatadogReferenceTableFileMetadataAccessDetails" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

const dataDatadogReferenceTableFileMetadataAccessDetails: dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails = { ... }
```


### DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

const dataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail: dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail = { ... }
```


### DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

const dataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail: dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail = { ... }
```


### DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail <a name="DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

const dataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail: dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail = { ... }
```


### DataDatadogReferenceTableSchema <a name="DataDatadogReferenceTableSchema" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

const dataDatadogReferenceTableSchema: dataDatadogReferenceTable.DataDatadogReferenceTableSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]</code> | fields block. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema.property.fields"></a>

```typescript
public readonly fields: IResolvable | DataDatadogReferenceTableSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/reference_table#fields DataDatadogReferenceTable#fields}

---

### DataDatadogReferenceTableSchemaFields <a name="DataDatadogReferenceTableSchemaFields" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

const dataDatadogReferenceTableSchemaFields: dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

new dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName">awsBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `awsBucketName`<sup>Required</sup> <a name="awsBucketName" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName"></a>

```typescript
public readonly awsBucketName: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail</a>

---


### DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

new dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId">azureClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName">azureContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName">azureStorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureClientId`<sup>Required</sup> <a name="azureClientId" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId"></a>

```typescript
public readonly azureClientId: string;
```

- *Type:* string

---

##### `azureContainerName`<sup>Required</sup> <a name="azureContainerName" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName"></a>

```typescript
public readonly azureContainerName: string;
```

- *Type:* string

---

##### `azureStorageAccountName`<sup>Required</sup> <a name="azureStorageAccountName" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName"></a>

```typescript
public readonly azureStorageAccountName: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail</a>

---


### DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

new dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName">gcpBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId">gcpProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail">gcpServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `gcpBucketName`<sup>Required</sup> <a name="gcpBucketName" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName"></a>

```typescript
public readonly gcpBucketName: string;
```

- *Type:* string

---

##### `gcpProjectId`<sup>Required</sup> <a name="gcpProjectId" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId"></a>

```typescript
public readonly gcpProjectId: string;
```

- *Type:* string

---

##### `gcpServiceAccountEmail`<sup>Required</sup> <a name="gcpServiceAccountEmail" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail"></a>

```typescript
public readonly gcpServiceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail</a>

---


### DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

new dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail">awsDetail</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail">azureDetail</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail">gcpDetail</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails">DataDatadogReferenceTableFileMetadataAccessDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsDetail`<sup>Required</sup> <a name="awsDetail" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail"></a>

```typescript
public readonly awsDetail: DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a>

---

##### `azureDetail`<sup>Required</sup> <a name="azureDetail" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail"></a>

```typescript
public readonly azureDetail: DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a>

---

##### `gcpDetail`<sup>Required</sup> <a name="gcpDetail" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail"></a>

```typescript
public readonly gcpDetail: DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogReferenceTableFileMetadataAccessDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails">DataDatadogReferenceTableFileMetadataAccessDetails</a>

---


### DataDatadogReferenceTableFileMetadataOutputReference <a name="DataDatadogReferenceTableFileMetadataOutputReference" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

new dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.accessDetails">accessDetails</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorRowCount">errorRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorType">errorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.syncEnabled">syncEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata">DataDatadogReferenceTableFileMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessDetails`<sup>Required</sup> <a name="accessDetails" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.accessDetails"></a>

```typescript
public readonly accessDetails: DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `errorRowCount`<sup>Required</sup> <a name="errorRowCount" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorRowCount"></a>

```typescript
public readonly errorRowCount: number;
```

- *Type:* number

---

##### `errorType`<sup>Required</sup> <a name="errorType" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorType"></a>

```typescript
public readonly errorType: string;
```

- *Type:* string

---

##### `syncEnabled`<sup>Required</sup> <a name="syncEnabled" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.syncEnabled"></a>

```typescript
public readonly syncEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogReferenceTableFileMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata">DataDatadogReferenceTableFileMetadata</a>

---


### DataDatadogReferenceTableSchemaFieldsList <a name="DataDatadogReferenceTableSchemaFieldsList" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

new dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.get"></a>

```typescript
public get(index: number): DataDatadogReferenceTableSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogReferenceTableSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]

---


### DataDatadogReferenceTableSchemaFieldsOutputReference <a name="DataDatadogReferenceTableSchemaFieldsOutputReference" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

new dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogReferenceTableSchemaFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>

---


### DataDatadogReferenceTableSchemaOutputReference <a name="DataDatadogReferenceTableSchemaOutputReference" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer"></a>

```typescript
import { dataDatadogReferenceTable } from '@cdktn/provider-datadog'

new dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resetFields">resetFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | DataDatadogReferenceTableSchemaFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resetFields"></a>

```typescript
public resetFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList">DataDatadogReferenceTableSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.primaryKeys">primaryKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fields"></a>

```typescript
public readonly fields: DataDatadogReferenceTableSchemaFieldsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList">DataDatadogReferenceTableSchemaFieldsList</a>

---

##### `primaryKeys`<sup>Required</sup> <a name="primaryKeys" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.primaryKeys"></a>

```typescript
public readonly primaryKeys: string[];
```

- *Type:* string[]

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | DataDatadogReferenceTableSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogReferenceTableSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

---



